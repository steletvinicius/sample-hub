class BatchesController < ApplicationController

  def index
    @batches = policy_scope(Batch)
    # sender can only view batch sent from his own institution
    if current_user.role == 'Recepção' || current_user.admin?
      @batches
    elsif current_user.role == 'Envio' || current_user.role == 'Cadastro'
      @batches = @batches.where(sender: current_user) # alterar critério para sender.institution == current_user.institution
    else
      @batches = []
    end
  end

  # ISSO TEM QUE ESTAR NO ACTION NEW DO CONTROLLER DO BATCH
  # def sent_at_must_be_today_or_earlier
  #   if sent_at > Date.today
  #     errors.add(:start_date, "Data não pode estar em branco e não pode ser uma data futura")
  #   end
  # end
  def create
    # samples to include on new batch to send to laboratory
    @samples_to_batch = params[:sample_ids]
    raise
    @user = current_user
    @batch = Batch.new(batch_params)
    @batch.sender = @user
    @batch.institution = @user.institution
    authorize @batch

    if @batch.save
      redirect_to batches_path
    else
      render samples_path # confirmar se essa é a view que dispara o post de batch
    end
  end

  def edit
    set_batch
    authorize @batch
    @samples = Sample.where(batch: @batch)
    if !@batch.received_at.nil?
      @status = "Recebida"
    elsif !@batch.sent_at.nil?
      @status = "Enviada"
    else
      @status = "Não enviada"
    end
  end

  # ISSO TEM QUE ENTRAR NO UPDATE NO CONTROLLER DO BATCH
  # def received_at_must_be_later_than_sent_at
  #   if received_at < sent_at
  #     errors.add(:received_at, "Data de recebimento anterior à data de envio")
  #   end
  # end
  def update
    set_batch
    authorize @batch
    # update receiver if received_at is updated
    if @batch.update(batch_params)
      flash[:success] = "Remessa atualizada com sucesso"
      redirect_to edit_batch_path(@batch)
    else
      flash[:error] = "Something went wrong"
      redirect_to edit_batch_path(@batch)
    end
  end


  def destroy
    @batch = Batch.find(params[:id])
    authorize @batch
    if @batch.received_at
      redirect_to edit_batch_path(@batch), alert: "Essa remessa já foi recebida e não pode ser alterada"
    else
      # if not received, removes batch from samples and destroys batch
      samples = Sample.where(batch: @batch)
      samples.each do |sample|
        sample.batch = nil
        sample.save
      end
      @batch.destroy
      redirect_to batches_path
    end
  end

  private

  def set_batch
    @batch = Batch.find(params[:id])
  end

  def batch_params
    params.require(:batch).permit(:sent_at, :received_at, :sample_ids[])
  end
end
