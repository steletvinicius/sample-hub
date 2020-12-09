class CreateSamples < ActiveRecord::Migration[6.0]
  def change
    create_table :samples do |t|
      t.references :batch, null: false, foreign_key: true
      t.date :collected_at
      t.string :category
      t.integer :quantity
      t.text :observation

      t.timestamps
    end
  end
end
