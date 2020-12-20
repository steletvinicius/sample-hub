class BatchesController < ApplicationController
  before_action :set_batch, only: [:edit, :update, :destroy]
  # GET /batches              batches_path
  def index
    @batches = policy_scope(Batch)
    respond_to do |format|
      format.html
      format.json { render json: { batches: @batches } }
    end
  end

  # POST /batches             batches_path
  def create
    @batch = Batch.new
    @user = current_user
    authorize @batch
    @batch.sender = @user

    # receives array of samples and sets batch_id on each sample
    if params[:sample_ids]
      if @batch.save
        params[:sample_ids].each do |sample_id|
          sample = Sample.find(sample_id.to_i)
          sample.batch = @batch
          sample.save
        end
        flash.notice = "Remessa criada com sucesso!"
        redirect_to edit_batch_path(@batch)
      else
        flash.alert = "ERRO: Você não tem autorização para criar uma remessa"
        redirect_to samples_path and return
      end
    else
      flash.alert = "ERRO: Uma remessa precisa conter pelo menos 1 amostra"
      redirect_to samples_path
    end
  end

  # GET /batches/:id/edit     edit_batch_path
  def edit
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

  # PATCH+PUT /batches/:id    batch_path
  def update
    @user = current_user
    authorize @batch

    # Prevents any update if the batch has been marked as received
    unless @batch.received_at.nil?
      flash.alert = "ERRO: Essa remessa já foi recebida e não pode ser alterada"
      redirect_to edit_batch_path(@batch) and return
    end

    # Removes 1 sample from the batch before it is sent to the lab
    if params[:batch].present? && params[:batch][:sample_id].present?
      sample = Sample.find(params[:batch][:sample_id].to_i)
      sample.batch = nil
      sample.save
      redirect_to edit_batch_path(@batch) and return
    end

    # Rejects 1 sample on the batch after it was sent and before it is received
    if params[:rejected].present?
      sample = Sample.find(params[:rejected].to_i)
      sample.status = "rejeitada"
      if sample.save
        redirect_to edit_batch_path(@batch) and return
      end
    end

    # Erases rejection of a sample on the batch after it was sent and before it is received
    if params[:accepted].present?
      sample = Sample.find(params[:accepted].to_i)
      sample.status = "enviada"
      sample.rejection_comment = nil
      if sample.save
        redirect_to edit_batch_path(@batch) and return
      end
    end

    # Updates RECEIVED_AT and updates final status of the samples on the batch
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
          sent_samples = @batch.samples.where(status: "enviada")
          sent_samples.each do |sample|
            sample.status = "recebida"
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

    # Updates SENT_AT and updates status of the samples as sent
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
      # INSERIR MENSAGEM DE ERRO PARA SAMPLE SEM QUANTIDADE DE TUBOS
      else
        @batch.sender = @user
        @batch.sent_at = sent_at
        if @batch.save
          @batch.samples.each do |sample|
            sample.status = "enviada"
            sample.save
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

  # DELETE /batches/:id       batch_path
  def destroy
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
