class AddUsersToBatch < ActiveRecord::Migration[6.0]
  def change
    add_column :batches, :user_lab_id, :integer, foreign_key: true, index: true
    add_column :batches, :user_hospital_id, :integer, foreign_key: true, index: true
  end
end
