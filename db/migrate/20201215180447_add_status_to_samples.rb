class AddStatusToSamples < ActiveRecord::Migration[6.0]
  def change
    add_column :samples, :status, :string, default: 'incompleta', null: false
    # Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
