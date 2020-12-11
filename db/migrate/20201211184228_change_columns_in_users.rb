class ChangeColumnsInUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :status, :string
    add_column :users, :active, :boolean, :null => false, :default => true
  end
end
