class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :batch_lab, foreign_key: 'user_lab_id', class_name: 'Batch'
  has_many :batch_hospital, foreign_key: 'user_hospital_id', class_name: 'Batch'
end
