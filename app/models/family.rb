class Family < ApplicationRecord
  belongs_to :receptor, foreign_key: 'receptor_id', class_name: 'Patient'
  belongs_to :donor, foreign_key: 'donor_id', class_name: 'Patient'

  validates :receptor_id, presence: true
  validates :donor_id, presence: true
  validates :relationship, presence: true, inclusion: { in: [
    "mãe", "pai", "irmão(ã)", "conjugue", "companheir(a)o", "avó(ô)",
    "prima(o)", "tia(o)"
  ] }
end
