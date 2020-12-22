class Procedure < ApplicationRecord
  has_many :exams
  validates :cd_sus_procedure, presence: true, uniqueness: true
  validates :procedure_title, presence: true
  validates :description, presence: true, length: { minimum: 10 }
end
