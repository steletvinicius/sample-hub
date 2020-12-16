class BatchesController < ApplicationController
  def index
    @batches = policy_scope(Batch).includes(:sender, :receiver).order(sent_at: :desc)
    # sender can only view batch sent from his own institution
    if current_user.role == 'Recepção' || current_user.admin?
      @batches
    elsif current_user.role == 'Envio' || current_user.role == 'Cadastro'
      users = User.where(institution: current_user.institution)
      @batches = Batch.select { |batch| users.include?(batch.sender) }
    else
      @batches = []
    end
    respond_to do |format|
      format.html
      format.json { render json: { batches: @batches } }
    end
  end

  def create
    @batch = Batch.new
    @user = current_user
    authorize @batch

    @batch.sender = @user

    if @batch.save
      params[:sample_ids].each do |sample_id|
        sample = Sample.find(sample_id.to_i)
        sample.batch = @batch
        sample.save
      end
      redirect_to edit_batch_path(@batch)
    else
      render samples_path
    end
  end

  def edit
    set_batch
    authorize @batch
    @samples = Sample.where(batch: @batch)
    if @batch.received_at
      @status = "Recebida"
    elsif @batch.sent_at
      @status = "Enviada"
    else
      @status = "Não enviada"
    end
  end

  def update
    set_batch
    @user = current_user
    authorize @batch

    if params[:batch][:sample_id]
      sample = Sample.find(params[:batch][:sample_id].to_i)
      sample.batch = nil
      sample.save
      redirect_to edit_batch_path(@batch) and return
    end

    if @batch.received_at
      flash.alert = "ERRO: Essa remessa já foi recebida e não pode ser alterada"
      redirect_to edit_batch_path(@batch) and return
    end

    if batch_params.has_key?(:received_at)
      received_at = batch_params[:received_at].to_datetime

      if received_at.nil?
        flash.alert = "ERRO: A data não pode estar em branco"
        redirect_to edit_batch_path(@batch) and return
      elsif @batch.sent_at.nil?
        flash.alert = "ERRO: Esta remessa não tem data de envio"
        redirect_to edit_batch_path(@batch) and return
      elsif received_at < @batch.sent_at
        flash.alert = "ERRO: Data de recebimento anterior à data de envio"
        redirect_to edit_batch_path(@batch) and return
      else
        @batch.receiver = @user
        @batch.received_at = received_at
        if @batch.save
          params.keys.select { |key| key.include? "receiving" }.map { |key| key.split("-")[0] }.each do |sample_id|
            sample = Sample.find(sample_id.to_i)
            sample.status = params["#{sample.id}-receiving"] == "true" ? "recebida" : "rejeitada"
            sample.save
          end
          flash.notice = "Recebimento da remessa confirmado com sucesso. Obrigado!"
          redirect_to edit_batch_path(@batch) and return
        else
          flash.alert = "Algo impediu a confirmação do envio!"
          redirect_to edit_batch_path(@batch)
        end
      end
    end

    if batch_params.has_key?(:sent_at)
      sent_at = batch_params[:sent_at].to_datetime

      if sent_at.nil?
        flash.alert = "ERRO: A data não pode estar em branco"
        redirect_to edit_batch_path(@batch) and return
      elsif sent_at > Date.today
        flash.alert = "ERRO: A data de envio não pode ser posterior à data de hoje"
        redirect_to edit_batch_path(@batch) and return
      elsif @batch.sent_at
        flash.alert = "ERRO: O envio desta remessa já foi confirmado"
        redirect_to edit_batch_path(@batch) and return
      elsif Sample.where("batch_id = ? AND collected_at = ?", @batch, nil).count > 0
        flash.alert = "ERRO: Essa remessa contém amostras sem data de coleta"
        redirect_to edit_batch_path(@batch) and return
      else
        @batch.sender = @user
        @batch.sent_at = sent_at
        if @batch.save
          @batch.samples.each do |samp|
            samp.status = "enviada"
            samp.save
          end
          flash.notice = "Envio da remessa confirmado com sucesso. Obrigado!"
          redirect_to edit_batch_path(@batch) and return
        else
          flash.alert = "Algo impediu a confirmação do recebimento!"
          redirect_to edit_batch_path(@batch) and return
        end
      end
    end
  end

  def destroy
    set_batch
    authorize @batch
    if @batch.received_at
      redirect_to edit_batch_path(@batch), alert: "ERRO: Essa remessa já foi recebida e não pode ser alterada"
    else
      samples = Sample.where(batch: @batch)
      samples.each do |sample|
        sample.batch = nil
        sample.save
      end
      @batch.destroy
      redirect_to batches_path
    end
  end

  # ----------------------------------------------------------------------------
  private

  def set_batch
    @batch = Batch.find(params[:id])
  end

  def batch_params
    params.require(:batch).permit(:sent_at, :received_at)
  end
end
