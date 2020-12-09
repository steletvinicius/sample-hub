class CreateProcedures < ActiveRecord::Migration[6.0]
  def change
    create_table :procedures do |t|
      t.string :cd_exame
      t.string :cd_sus
      t.string :description

      t.timestamps
    end
  end
end
