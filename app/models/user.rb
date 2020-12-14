class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :batch_receiver, foreign_key: 'receiver_id', class_name: 'Batch'
  has_many :batch_sender, foreign_key: 'sender_id', class_name: 'Batch'

  validates :first_name, :last_name, presence: true 

  validates :cpf, uniqueness: true 
  validates :institution, presence: true

  validates :role, inclusion: { in: [ 
                                      'Cadastro',
                                      'Envio',
                                      'Recepção'
                                    ], allow_nil: false }

  # enum role: { 'Cadastro':0, 'Envio':1, 'Recepção':2}

  # def name_cannot_contain_numbers
  #   if :first_name.match?(/\D+/)
  #     errors.add(:first_name, "Nome não pode conter números.")
  #   end

  #   if :last_name.match?(/\D+/)
  #     errors.add(:last_name, "Sobrenome não pode conter números.")
  #   end
  # end

end
