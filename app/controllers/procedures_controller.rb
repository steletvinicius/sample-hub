class ProceduresController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :set_procedure

  def index
    @procedures = Procedure.all
  end

  def new
    @procedure = Procedure.new
  end

  def create
    @procedure = Procedure.create(params_procedure)
    if @procedure.save
      redirect_to procedures_path
    else
      render :new
    end
  end

  private

  def params_procedure
    params.require(:procedure).permit(:cd_exame, :cd_sus, :description)
  end

  def set_procedure
    @procedure = Procedure.new
  end
end
