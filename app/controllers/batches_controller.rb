class BatchesController < ApplicationController

  def index
    @batches = policy_scope(Batch)
  end

  def show
    @batch = Batch.find(params[:id])
    authorize @batch
  end

  # ISSO TEM QUE ESTAR NO ACTION NEW DO CONTROLLER DO BATCH
  # def sent_at_must_be_today_or_earlier
  #   if sent_at > Date.today
  #     errors.add(:start_date, "Data não pode estar em branco e não pode ser uma data futura")
  #   end
  # end
  def create
    @user = current_user
    @batch = Batch.new(batch_params)
    @batch.sender = @user
    authorize @batch

    if @batch.save
      redirect_to batches_path
    else
      render samples_path # confirmar se essa é a view que dispara o post de batch
    end
  end

  # ISSO TEM QUE ENTRAR NO UPDATE NO CONTROLLER DO BATCH
  # def received_at_must_be_later_than_sent_at
  #   if received_at < sent_at
  #     errors.add(:received_at, "Data de recebimento anterior à data de envio")
  #   end
  # end

  private

  def batch_params
    params.require(:batch).permit(:samples, :sent_at)
  end
end
