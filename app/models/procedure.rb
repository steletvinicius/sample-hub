class Procedure < ApplicationRecord
  has_many :exams
  validates :description, presence: true, length: { minimum: 10 }
  validates :cd_exame, presence: true
end
