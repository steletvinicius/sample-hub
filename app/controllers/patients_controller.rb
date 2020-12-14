class PatientsController < ApplicationController
  before_action :set_patient, only: %i[show]

  def index
    @patients = policy_scope(Patient).order(created_at: :desc)
    @patient = Patient.find(params["selectPatient"]) if params["selectPatient"].present?
  end

  def show
  end

  def set_patient
    # @patient = Patient.find(params[:id]) ## Forma sem pundit
    @patient = policy_scope(Patient).find(params[:id])
    authorize @patient
  end
end
