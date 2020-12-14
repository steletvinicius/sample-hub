class SamplesController < ApplicationController
  before_action :set_sample, only: %i[edit update edit_both]

  def index
    # samples with date of collection pending
    @samples_to_complete = policy_scope(Sample).order(collected_at: :asc).where(collected_at: nil)
    # samples ready to send to laboratory
    @samples_ready_to_send = policy_scope(Sample).order(collected_at: :asc).where.not(collected_at: nil)
  end

  def new
    @sample = Sample.new
    authorize @sample
  end

  def create
    @sample = Sample.new(sample_params)
    authorize @sample
    if @sample.save!
      redirect_to edit_both_sample_path
    else
      redirect_to new_patient_path
    end
  end

  def edit
  end

  def edit_both
  end

  def update
    if @sample.update(sample_params)
      redirect_to samples_path
    else
      render :edit
    end
  end

  private

  def sample_params
    params.require(:sample).permit(:batch_id, :patient_id, :doctor_id, :collected_at, :category, :quantity, :observation)
  end

  def set_sample
    @sample = Sample.find(params[:id])
    authorize @sample
  end
end
