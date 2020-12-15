class Sample < ApplicationRecord
  belongs_to :batch, optional: true
  belongs_to :doctor, optional: true
  belongs_to :patient
  has_many :exams

  validates :patient, presence: true
  validates :category, inclusion: {
    in: ["Sangue", "Soro", "Segmento de cordão"],
    message: "Esta não é uma categoria válida de amostra"
  }, allow_nil: true
  validates :quantity, numericality: { only_integer: true }, allow_nil: true
  validates :status, inclusion: { in: ["criada", "coletada", "enviada", "recebida", "rejeitada"] }
end
