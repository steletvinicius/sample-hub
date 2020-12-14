class PatientsController < ApplicationController
  before_action :set_patient, only: %i[show]

  def index
    @query = policy_scope(Patient).order(created_at: :desc)

    @patients = {}

    @query.each do |_q|
      families = Family.joins(:receptor).where(receptor_id: _q)
      if families.present?
        components = []
        families.each do |_f|
          components.push({
                            id: _f.donor_id,
                            relationship: _f.relationship,
                            name: "#{Patient.find(_f.donor_id).first_name} #{Patient.find(_f.donor_id).last_name}",
                            age: ((Date.today - Patient.find(_f.donor_id).born_at).to_i / 365.25).to_i
                          })
        end
        @patients[_q.id] = {
          name: "#{_q.first_name} #{_q.last_name}",
          age: ((Date.today - Patient.find(_q.id).born_at).to_i / 365.25).to_i,
          family: components
        }
      else
        @patients[_q.id] = {
          id: _q.id,
          name: "#{_q.first_name} #{_q.last_name}",
          age: ((Date.today - Patient.find(_q.id).born_at).to_i / 365.25).to_i
        }
      end
    end
  end

  def show
  end

  def new
    @patient = Patient.new
    authorize @patient
  end

  def create
    @patient = Patient.new(patient_params)
    authorize @patient
    if @patient.save
      @sample = Sample.new
      authorize @sample
      @sample.patient = @patient
      @sample.save!
      redirect_to edit_sample_path(@sample)
    else
      render :new
    end
  end

  private

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :gender, :born_at, :address, :cpf, :sus_code)
  end

  def set_patient
    # @patient = Patient.find(params[:id]) ## Forma sem pundit
    @patient = policy_scope(Patient).find(params[:id])
    authorize @patient
  end
end
