class SamplesController < ApplicationController
  def new
    @sample = Sample.new
    authorize @sample
  end

  def create
    @sample = Sample.new(sample_params)
    authorize @sample
  end
end
