class SamplesController < ApplicationController
  before_action :set_sample, only: %i[edit update]

  def index
    # samples with date of collection pending
    @samples_to_complete = policy_scope(Sample).order(collected_at: :asc).where(collected_at: nil)
    # samples ready to send to laboratory
    @samples_ready_to_send = policy_scope(Sample).order(collected_at: :asc).where.not(collected_at: nil)
  end

  def new
    @sample = Sample.new
    authorize @sample
    @patients = policy_scope(Patient).order(created_at: :desc)
  end

  def create
    @sample = Sample.new
    @sample.patient = Patient.find(params[:patient_id].to_i)
    authorize @sample
    if @sample.save
      redirect_to edit_sample_path(@sample)
    else
      redirect_to new_patient_path
    end
  end

  def edit
    @doctors = policy_scope(Doctor).order(first_name: :asc)
  end

  def update
    @sample.doctor = Doctor.find(params[:doctor_id].to_i)
    @sample.category = params[:category]
    @sample.observation = params[:observation]
    if @sample.save
      redirect_to samples_path
    else
      render :edit
    end
  end

  private

  def sample_params
    params.require(:sample).permit(:patient_id, :doctor_id, :collected_at, :category, :quantity, :observation)
  end

  def set_sample
    @sample = Sample.find(params[:id])
    authorize @sample
  end
end
