class CreateProcedures < ActiveRecord::Migration[6.0]
  def change
    create_table :procedures do |t|
      t.string :cd_sus_procedure
      t.string :procedure_title
      t.string :description
      t.timestamps
    end
  end
end
