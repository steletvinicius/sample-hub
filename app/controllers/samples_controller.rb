class SamplesController < ApplicationController
  before_action :set_sample, only: %i[edit update]

  def new
    @sample = Sample.new
    authorize @sample
  end

  def create
    @sample = Sample.new(sample_params)
    authorize @sample
    if @sample.save
      # precisa trocar esse redirect para alguma página útil
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @sample.update(sample_params)
      redirect_to root_path
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

  def index
    @samples = policy_scope(Sample)
  end

end
