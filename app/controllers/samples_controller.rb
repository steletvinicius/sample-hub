class SamplesController < ApplicationController
  before_action :set_sample, only: %i[show edit update]

  # GET /samples              samples_path
  def index
    @samples = policy_scope(Sample).where(batch_id: nil).order(updated_at: :desc)
  end

  # GET /samples/:id          sample_path
  def show
    authorize @sample
  end

  # GET /samples/new          new_sample_path
  def new
    @sample = Sample.new
    @patient = Patient.new
    authorize @sample
    @patients = policy_scope(Patient).order(created_at: :desc)
  end

  # POST /samples             samples_path
  def create
    @sample = Sample.new
    @sample.patient = Patient.find(params[:patient_id].to_i) if params[:patient_id]
    set_exam
    authorize @sample
    if @sample.save
      redirect_to edit_sample_path(@sample)
    else
      redirect_to new_sample_path
    end
  end

  # GET /samples/:id/edit     edit_sample_path
  def edit
    @doctors = policy_scope(Doctor).order(first_name: :asc)
  end

  # PATCH+PUT /samples/:id    sample_path
  def update
    # Criar funcao para cadastrar o exame na amostra?
    # updates COLLECTED_AT and QUANTITY from SAMPLES INDEX VIEW
    if sample_params[:collected_at] == ""
      if @sample.update(sample_params)
        redirect_to sample_path(@sample) and return
      else
        flash.alert = "ERRO: Algo impediu a atualização da coleta!"
        render :edit
      end

    elsif sample_params[:collected_at] && sample_params[:quantity]
      if @sample.update(sample_params)
        redirect_to samples_path and return
      else
        flash.alert = "ERRO: Informe Data de Coleta e Quantidade!"
        redirect_to samples_path and return
      end
    end

    # updates STATUS from BATCH EDIT VIEW
    # updates REJECTION_COMMENT from BATCH EDIT VIEW
    unless @sample.batch_id.nil?
      @batch = Batch.find(@sample.batch_id)


      if @sample.update(sample_params)
        redirect_to edit_batch_path(@batch)
      else
        flash.alert = "Não foi possível atualizar essas informações"
        redirect_to edit_batch_path(@batch)
      end
    end
  end

  # ----------------------------------------------------------------------------
  private

  def sample_params
    params.require(:sample).permit(:patient_id, :doctor_id, :collected_at, :category, :quantity, :observation, :status, :rejection_comment)
  end

  def set_sample
    @sample = Sample.find(params[:id])
    authorize @sample
  end

  # Lógica de registro na tabela exams
  def set_exam
    case @sample.patient.patient_type
    when 'receptor'
      set_exam_receptor
    when 'donor'
      set_exam_donor
    when 'not_relative'
      set_exam_not_relative
    end
  end

  def set_exam_receptor
    # Criar 2 registros de exames na tabela exams com os procedures 1 - 2
    (1..2).each do |x|
      @exam = Exam.new
      @exam.sample = @sample
      @exam.procedure = Procedure.find(x)
      @exam.save
    end
  end

  def set_exam_donor
    # Criar 3 registros de exames na tabela exams com os procedures 3 - 4
    (3..4).each do |x|
      @exam = Exam.new
      @exam.sample = @sample
      @exam.procedure = Procedure.find(x)
      @exam.save
    end
  end

  def set_exam_not_relative
    # Criar 3 registros de exames na tabela exams com os procedures 6 - 7
    (6..7).each do |x|
      @exam = Exam.new
      @exam.sample = @sample
      @exam.procedure = Procedure.find(x)
      @exam.save
    end
  end

end
