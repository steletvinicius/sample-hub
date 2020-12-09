class Batch < ApplicationRecord
  has_many :samples
  belongs_to :user_lab, foreign_key: 'user_lab_id', class_name: 'User'
  belongs_to :user_hospital, foreign_key: 'user_hospital_id', class_name: 'User'
end
