class Family < ApplicationRecord
  belongs_to :receptor, foreign_key: 'receptor_id', class_name: 'Patient'
  belongs_to :donor, foreign_key: 'donor_id', class_name: 'Patient'
end
