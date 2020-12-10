class Sample < ApplicationRecord
  belongs_to :batch, optional: true
  belongs_to :doctor
  belongs_to :patient
  has_many :exams

  validates :patient, presence: true
  validates :doctor, presence: true
  validates :collected_at, presence: true
  validates :category, presence: true,
                       inclusion: {
                         in: ["sangue", "soro", "segmento de cordão"],
                         message: "Esta não é uma categoria válida de amostra"
                       }
  validates :quantity, presence: true, numericality: { only_integer: true }
end
