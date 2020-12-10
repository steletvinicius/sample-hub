class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :batch_receiver, foreign_key: 'user_lab_id', class_name: 'Batch'
  has_many :batch_sender, foreign_key: 'user_hospital_id', class_name: 'Batch'

  validates :registration_id, uniqueness: true
  validates :role, inclusion: { in: ['Envio de amostras','Recepção de amostras','Administrador'], allow_nil: false }
  validates :first_name, :last_name, presence: true, 
  # Se role = Envio ou Recepção de amostra, exigir preenchimento de institution e matrícula ?
end
