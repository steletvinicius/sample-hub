class Doctor < ApplicationRecord
  has_many :samples
  validates :crm, presence: true,
                  uniqueness: true,
                  format: {
                    with: /\A\d{2}\.\d{5}-\d\z/,
                    message: "Por favor insira um formato válido de CRM (xx.xxxxx-x)"
                  }
  validates :first_name, presence: true, uniqueness: { scope: :last_name, message: "Esse nome já existe" }
  validates :last_name, presence: true
end
