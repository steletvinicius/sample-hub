class Sample < ApplicationRecord
  belongs_to :batch
  belongs_to :doctor
  belongs_to :patient
  has_many :exams
end
