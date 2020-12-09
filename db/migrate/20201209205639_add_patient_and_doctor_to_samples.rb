class AddPatientAndDoctorToSamples < ActiveRecord::Migration[6.0]
  def change
    add_reference :samples, :patient, null: false, foreign_key: true
    add_reference :samples, :doctor, null: false, foreign_key: true
  end
end
