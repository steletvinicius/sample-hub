class AddUsersToBatch < ActiveRecord::Migration[6.0]
  def change
    add_column :batches, :sender_id, :integer, foreign_key: true, index: true
    add_column :batches, :receiver_id, :integer, foreign_key: true, index: true
  end
end
