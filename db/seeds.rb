# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning exams from DB..."
Exam.destroy_all

puts "Cleaning samples from DB..."
Sample.destroy_all

puts "Cleaning batches from DB..."
Batch.destroy_all

puts "Cleaning families from DB..."
Family.destroy_all

puts "Cleaning patients from DB..."
Patient.destroy_all

puts "Cleaning doctors from DB..."
Doctor.destroy_all

puts "Cleaning users from DB..."
User.destroy_all

puts "Cleaning procedures from DB..."
Procedure.destroy_all

puts " "
puts "SEEDING STARTED!"
puts "Populating procedures table with standard sus procedures"

cd_exames = [
  "03_DMCF1",
  "04_DMCF2",
  "05_DMCF3",
  "01_RMCF1",
  "02_RMCF2",
  "06_RMRF1",
  "07_RMRF2"
]
cd_sus = [
  "0501010025",
  "0501010033",
  "0501010041",
  "0501020012",
  "0501020020",
  "0501020012",
  "0501020020"
]

descriptions = [
  "DOA APARENT MO CEMO FASE 1. HLA A, B (SOROL OU BIOMOL BAIXA RESOL)",
  "DOA APARENT MO CEMO FASE 2. HLA DRB1, DQB1 (BIOMOL BAIXA RESOL)",
  "DOA APARENT MO CEMO FASE 3. HLA DRB1, DQB1 (BIOMOL ALTA RESOL)",
  "REC APARENT MO CEMO FASE 1. HLA A, B(SOROL OU BIOMOL BAIXA RESOL) HLA DRB1, DQB1(BIOMOL BAIXA RESOL)",
  "REC APARENT MO CEMO FASE 2. HLA DRB1, DQB1 (BIOMOL ALTA RESOL)",
  "REC NAO APARENT MO REREME FASE 1. HLA A, B (SOROL OU BIOMOL BAIXA RESOL) HLA DRB1, DQB1 (BIOMOL BAIXA RESOL)",
  "REC NAO APARENT MO REREME FASE 2. HLA DRB1, DQB1 (BIOMOL ALTA RESOL)"
]
x = 0
loop do
  Procedure.create!(
    cd_exame: cd_exames[x],
    cd_sus: cd_sus[x],
    description: descriptions[x]
  )
  puts "Procedure #{cd_exames[x]} created."
  x += 1
  break unless x < cd_exames.length
end

puts "Created #{Procedure.count} SUS procedures."

user = User.create!(
  first_name: 'Cláudia',
  last_name: 'Tanaka',
  email: 'cakemit@gmail.com',
  password: '123456',
  role: 'Envio',
  institution: 'Hospital Einstein',
  cpf: '12345678901',
  admin: true
)
puts "Created user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email} | admin? #{user.admin}"

user = User.create!(
  first_name: 'Vinicius',
  last_name: 'Stelet',
  email: 'vinicius.bootcamp@gmail.com',
  password: '123456',
  role: 'Recepção',
  institution: 'Inca',
  cpf: '23456789012',
  admin: true
)
puts "Created user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email} | admin? #{user.admin}"

user = User.create!(
  first_name: 'Edson',
  last_name: 'Dario',
  email: 'edson.dario@gmail.com',
  password: '123456',
  role: 'Envio',
  institution: 'Hospital Vitória',
  cpf: '34567890123',
  admin: true
)
puts "Created user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email} | admin? #{user.admin}"

user = User.create!(
  first_name: 'Luis Henrique',
  last_name: 'Simões',
  email: 'luishenriquesimoes@yahoo.com.br',
  password: '123456',
  role: 'Cadastro',
  institution: 'Inca',
  cpf: '45678901234',
  admin: true
)
puts "Created user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email} | admin? #{user.admin}"

receiver = User.create!(
  first_name: 'Recepção',
  last_name: 'de Amostras',
  email: 'recebe@teste.com',
  password: '123456',
  role: 'Recepção',
  institution: 'Inca'
)
puts "Created user [#{receiver.id}] #{receiver.first_name} #{receiver.last_name} | #{receiver.email} | admin? #{receiver.admin}"

sender = User.create!(
  first_name: 'Envio',
  last_name: 'de Amostras',
  email: 'envio@teste.com',
  password: '123456',
  role: 'Envio',
  institution: 'Hospital Samaritano',
  cpf: '56891'
)
puts "Created user [#{sender.id}] #{sender.first_name} #{sender.last_name} | #{sender.email} | admin? #{sender.admin}"

puts " "
puts "Created #{User.count} users"
puts " "

10.times do
  batch = Batch.create!(
    sent_at: Date.today,
    sender: sender,
    received_at: Date.today + (1..7).to_a.sample.days,
    receiver: receiver
  )
  puts "Created batch [#{batch.id}], sent #{batch.sent_at} by #{batch.sender.first_name} | received #{batch.received_at} by #{batch.receiver.first_name}"
end

10.times do
  batch = Batch.create!(
    sent_at: Faker::Date.between(from: Date.today, to: '2021-02-01'),
    sender: sender
  )
  puts "Created batch [#{batch.id}], sent #{batch.sent_at} by #{batch.sender.first_name} | not yet received"
end

puts " "
puts "Created #{Batch.count} batches"

##### BEGIN - SEED - Patients #####

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

puts "Created #{Patient.count} patients"
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
puts "Created #{Family.count} families"
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
    batch: Batch.all.sample,
    patient: Patient.all.sample,
    doctor: Doctor.all.sample,
    collected_at: Date.today - rand(30),
    category: ["Sangue", "Soro", "Segmento de cordão"].sample,
    quantity: rand(1..10)
  )
  sample.observation = "Esta é a observação para a sample com id #{sample.id}"
  puts "Created sample with id #{sample.id} and category #{sample.category}"
end

puts "Samples are done!"

10.times do
  exam = Exam.create(
    sample: Sample.all.sample,
    procedure: Procedure.all.sample
  )
  puts "Created exam id #{exam.id} to sample #{exam.sample.id} with procedure #{exam.procedure.id}"
end

puts "Exams are done"

puts " "
puts "FINISHED SEEDING!"
