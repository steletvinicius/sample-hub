class Batch < ApplicationRecord
  has_many :samples
  belongs_to :sender, foreign_key: 'sender_id', class_name: 'User'
  belongs_to :receiver, foreign_key: 'receiver_id', class_name: 'User', optional: true

  validates :sent_at, presence: true
  # how to make receiver nil possible?

  # ISSO TEM QUE ESTAR NO ACTION NEW DO CONTROLLER DO BATCH
  # def sent_at_must_be_today_or_earlier
  #   if sent_at > Date.today
  #     errors.add(:start_date, "Data não pode estar em branco e não pode ser uma data futura")
  #   end
  # end

  # ISSO TEM QUE ENTRAR NO UPDATE NO CONTROLLER DO BATCH
  # def received_at_must_be_later_than_sent_at
  #   if received_at < sent_at
  #     errors.add(:received_at, "Data de recebimento anterior à data de envio")
  #   end
  # end

end
