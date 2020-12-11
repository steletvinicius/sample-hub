class Sample < ApplicationRecord
  belongs_to :batch, optional: true
  belongs_to :doctor
  belongs_to :patient
  has_many :exams

  validates :patient, presence: true
  validates :doctor, presence: true
  validates :category, inclusion: {
    in: ["Sangue", "Soro", "Segmento de cordão"],
    message: "Esta não é uma categoria válida de amostra"
  }
  validates :quantity, numericality: { only_integer: true }
end
