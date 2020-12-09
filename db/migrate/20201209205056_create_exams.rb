class CreateExams < ActiveRecord::Migration[6.0]
  def change
    create_table :exams do |t|
      t.references :sample, null: false, foreign_key: true
      t.references :procedure, null: false, foreign_key: true
      t.string :result

      t.timestamps
    end
  end
end
