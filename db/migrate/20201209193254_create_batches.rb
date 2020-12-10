class CreateBatches < ActiveRecord::Migration[6.0]
  def change
    create_table :batches do |t|
      t.date :sent_at
      t.date :received_at

      t.timestamps
    end
  end
end
