# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##### BEGIN - SEED - Patients #####
puts "Cleaning patients from DB..."
Patient.destroy_all

puts "Cleaning families from DB..."
Family.destroy_all

puts "Cleaning doctors from DB..."
Doctor.destroy_all

puts "Cleaning samples from DB..."
Sample.destroy_all

puts "Make patients... 'May the Force be with you.'"

Patient.create(
  first_name: "Shmi",
  last_name: "Skywalker",
  gender: "F",
  born_at: "12/02/1920",
  address: "Brasília, Distrito Federal, Brasil",
  cpf: "91858387051",
  sus_code: "157833392350004"
)

Patient.create(
  first_name: "Anakin",
  last_name: "Skywalker",
  gender: "M",
  born_at: "07/07/1950",
  address: "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil",
  cpf: "98186492062",
  sus_code: "130551386630008"
)

Patient.create(
  first_name: "Padmé",
  last_name: "Amidala",
  gender: "F",
  born_at: "09/01/1955",
  address: "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil",
  cpf: "21547068000",
  sus_code: "717388181830004"
)

Patient.create(
  first_name: "Luke",
  last_name: "Skywalker",
  gender: "M",
  born_at: "15/07/1980",
  address: "SCN Quadra 2, Brasília, Distrito Federal, Brasil",
  cpf: "77596796028",
  sus_code: "158568593440006"
)

Patient.create(
  first_name: "Leia",
  last_name: "Organa",
  gender: "F",
  born_at: "15/07/1980",
  address: "SCN Quadra 2, Brasília, Distrito Federal, Brasil",
  cpf: "09141415035",
  sus_code: "958532819530006"
)

Patient.create(
  first_name: "Chewie",
  last_name: "Chewbacca",
  gender: "M",
  born_at: "15/07/1900",
  address: "Catetinho, Park Way, Distrito Federal, Brasil",
  cpf: "55450937024",
  sus_code: "290317708190008"
)
puts "Patients ready... 'Your eyes can deceive you, don't trust them.'"
##### END - SEED - Patients #####

##### BEGIN - SEED - Families #####

puts "Make families... 'I am your father.'"
Family.create(
  receptor_id: 2,
  donor_id: 1,
  relationship: "MÃE"
)

Family.create(
  receptor_id: 2,
  donor_id: 4,
  relationship: "FILHA(O)"
)

puts "Families ready... 'Try not. Do… or do not. There is no try.'"
##### END - SEED - Families #####

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
puts "Doctors are done!"

puts "Creating new samples DB:"

10.times do
  sample = Sample.create(
    patient: Patient.all.sample,
    doctor: Doctor.all.sample,
    collected_at: Date.today - rand(30),
    category: ["sangue", "soro", "segmento de cordão"].sample,
    quantity: rand(1..10)
  )
  sample.observation = "Esta é a observação para a sample com id #{sample.id}"
  puts "Created sample with id #{sample.id} and category #{sample.category}"
end

puts "Samples are done!"
