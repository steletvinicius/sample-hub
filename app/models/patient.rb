class Patient < ApplicationRecord
  has_many :receptor, foreign_key: 'receptor_id', class_name: 'Family'
  has_many :donors, foreign_key: 'donor_id', class_name: 'Family'
  has_many :samples

  validates :first_name, presence: true, length: { minimum: 3 }
  validates :last_name, presence: true, length: { minimum: 3 }
  validates :gender, presence: true, inclusion: { in: ["M", "F"] }
  validates :born_at, presence: { message: "Por favor insira uma data válida no formato dd/mm/aaaa" }
  validates :address, presence: true, length: { minimum: 3 }
  validates :cpf, presence: true, numericality: { only_integer: true }, uniqueness: true
  validates :sus_code, presence: true, numericality: { only_integer: true }
  validates :patient_type, inclusion: { in: ['donor', 'receptor', 'not_relative'] }
end
