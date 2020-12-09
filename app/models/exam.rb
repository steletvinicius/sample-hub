class Exam < ApplicationRecord
  belongs_to :sample
  belongs_to :procedure
end
