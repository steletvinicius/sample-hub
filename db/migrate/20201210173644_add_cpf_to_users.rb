class AddCpfToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :cpf, :string
  end
end
