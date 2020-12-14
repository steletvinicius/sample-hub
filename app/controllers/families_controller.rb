class FamiliesController < ApplicationController
  def new
    @family = Family.new
    authorize @family
    @patient = Patient.find(params["patient"].to_i)
    @patients = policy_scope(Patient).order(created_at: :desc)
  end

  def create
    @patient = Patient.find(params[:family][:donor_id])
    @family = Family.new(family_params)
    authorize @family
    if @family.save
      @sample = Sample.new
      authorize @sample
      @sample.patient = @patient
      @sample.save
      redirect_to edit_sample_path(@sample)
    else
      render :new
    end
  end

  private

  def family_params
    params.require(:family).permit(:donor_id, :receptor_id, :relationship)
  end
end
