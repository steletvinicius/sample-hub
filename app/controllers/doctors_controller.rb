class DoctorsController < ApplicationController
  def new
    @doctor = Doctor.new
    authorize @doctor
  end

  def create
    @doctor = Doctor.new(doctor_params)
    authorize @doctor
    if @doctor.save
      # precisa trocar esse path para samples ou alguma outra coisa
      redirect_to root_path
    else
      render :new
    end
  end

  def edit; end

  def update
    if @doctor.update(doctor_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def set_doctor
    @doctor = Doctor.find(params[:id])
    authorize @doctor
  end

  def doctor_params
    params.require(:doctor).permit(:first_name, :last_name, :crm)
  end
end
