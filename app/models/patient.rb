class Patient < ApplicationRecord
  has_many :receptor, foreign_key: 'receptor_id', class_name: 'Family'
  has_many :donors, foreign_key: 'donor_id', class_name: 'Family'
  has_many :samples
end
