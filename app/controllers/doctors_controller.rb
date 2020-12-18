class DoctorsController < ApplicationController
  def index
    @doctors = policy_scope(Doctor).order(first_name: :asc)
    if params[:id]
      @doctor_set = Doctor.find(params[:id])
      authorize @doctor_set
    end
    @doctor_new = Doctor.new
    authorize @doctor_new
  end

  def new
    @doctors = policy_scope(Doctor).order(first_name: :asc)
    if params[:id]
      @doctor_set = Doctor.find(params[:id])
      authorize @doctor_set
    end
    @doctor_new = Doctor.new
    authorize @doctor_new
  end

  def create
    @doctor_new = Doctor.new(doctor_params)
    authorize @doctor_new
    if @doctor_new.save
      # precisa trocar esse path para samples ou alguma outra coisa
      redirect_to doctors_path
    else
      render :index
    end
  end

  def edit
    @doctors = policy_scope(Doctor).order(first_name: :asc)
    if params[:id]
      @doctor_set = Doctor.find(params[:id])
      authorize @doctor_set
    end
    @doctor_new = Doctor.new
    authorize @doctor_new
  end

  def update
    @doctor_set = Doctor.find(params[:id])
    authorize @doctor_set
    if @doctor.update(doctor_params)
      redirect_to doctors_path
    else
      render :index
    end
  end

  private

  def doctor_params
    params.require(:doctor).permit(:first_name, :last_name, :crm)
  end
end
