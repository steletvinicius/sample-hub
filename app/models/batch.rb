class Batch < ApplicationRecord
  has_many :samples
  belongs_to :receiver, foreign_key: 'user_lab_id', class_name: 'User'
  belongs_to :sender, foreign_key: 'user_hospital_id', class_name: 'User'
end
