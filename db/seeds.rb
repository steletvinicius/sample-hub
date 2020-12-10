# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning doctors from DB..."
Doctor.destroy_all
puts "No more old doctors here!"

puts "Cleaning samples from DB..."
Sample.destroy_all
puts "No more old doctors here!"

doctors = [
  {
    first_name: "Laura",
    last_name: "Meyer",
    crm: "52.96891-9"
  },
  {
    first_name: "Rafael",
    last_name: "Ono Furukawa",
    crm: "52.96988-0"
  },
  {
    first_name: "Juliana",
    last_name: "O. Matias",
    crm: "52.89952-6"
  },
  {
    first_name: "Simone",
    last_name: "Maradei",
    crm: "52.65510-4"
  },
  {
    first_name: "Mayara",
    last_name: "Rêgo",
    crm: "52.98995-9"
  }
]

puts "Creating new doctors DB:"

doctors.each do |doctor|
  doc = Doctor.create(doctor)
  puts "Created doctor #{doc.first_name} #{doc.last_name} - CRM #{doc.crm} with ID #{doc.id}"
end
