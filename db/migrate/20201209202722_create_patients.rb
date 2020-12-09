class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.date :born_at
      t.string :address
      t.string :cpf
      t.string :sus_code

      t.timestamps
    end
  end
end
