class ProceduresController < ApplicationController
  before_action :set_procedure, except: :index

  def index
    @procedures = policy_scope(Procedure)
  end

  def show
  end

  def new
    @procedure = Procedure.new
  end

  def create
    @procedure = Procedure.new(params_procedure)
    if @procedure.save
      redirect_to procedures_path
    else
      render :new
    end
  end

  def update
    @procedure = Procedure.update(params_procedure)

  end

  def delete

  end

  private

  def params_procedure
    params.require(:procedure).permit(:cd_exame, :cd_sus, :description)
  end

  def set_procedure
    @procedure = Procedure.new
    authorize @procedure
  end
end
