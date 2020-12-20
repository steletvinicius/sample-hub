class AddRejectionCommentToSamples < ActiveRecord::Migration[6.0]
  def change
    add_column :samples, :rejection_comment, :text
  end
end
