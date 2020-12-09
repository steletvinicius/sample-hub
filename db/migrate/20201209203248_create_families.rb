class CreateFamilies < ActiveRecord::Migration[6.0]
  def change
    create_table :families do |t|
      t.integer :receptor_id, foreign_key: true, index: true
      t.integer :donor_id, foreign_key: true, index: true
      t.string :relationship

      t.timestamps
    end
  end
end
