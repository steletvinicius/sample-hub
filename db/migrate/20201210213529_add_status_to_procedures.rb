class AddStatusToProcedures < ActiveRecord::Migration[6.0]
  def change
    add_column :procedures, :active, :boolean
  end
end
