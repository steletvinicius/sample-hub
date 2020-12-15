# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning ALL databases..."
Exam.destroy_all
Sample.destroy_all
Batch.destroy_all
Family.destroy_all
Patient.destroy_all
Doctor.destroy_all
User.destroy_all
Procedure.destroy_all

puts " "
puts "SEEDING STARTED!"
puts " "
puts "Populating procedures table with standard sus procedures..."

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
  # puts "Procedure #{cd_exames[x]} created."
  x += 1
  break unless x < cd_exames.length
end

puts "Created #{Procedure.count} SUS procedures. PROCEDURES DONE!"

puts " "
puts "Creating users..."

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
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"

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
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"

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
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"

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
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"

receiver = User.create!(
  first_name: 'Bruna',
  last_name: 'Stelet',
  email: 'bruna@recepcao.com',
  password: '123456',
  role: 'Recepção',
  institution: 'Inca'
)
puts "Created receiver   [#{receiver.id}] #{receiver.first_name} #{receiver.last_name} | #{receiver.email}"

sender = User.create!(
  first_name: 'Ana',
  last_name: 'Secretária',
  email: 'ana@envio.com',
  password: '123456',
  role: 'Envio',
  institution: 'HC1',
  cpf: '56891'
)
puts "Created sender     [#{sender.id}] #{sender.first_name} #{sender.last_name} | #{sender.email}"

cadastro = User.create!(
  first_name: 'Thiago',
  last_name: 'Cadastro',
  email: 'thiago@cadastro.com',
  password: '123456',
  role: 'Cadastro',
  institution: 'HC1',
  cpf: '568912'
)
puts "Created sender cadastro [#{cadastro.id}] #{cadastro.first_name} #{cadastro.last_name} | #{cadastro.email}"

puts "...Created #{User.count} users. USERS DONE!"

##### BEGIN - SEED - Patients #####
puts " "
puts "Make patients... 'May the Force be with you.'"

patient = Patient.create(
  first_name: "Ana",
  last_name: "Milena",
  gender: "F",
  patient_type: "donor",
  born_at: Faker::Date.birthday,
  address: "Brasília, Distrito Federal, Brasil",
  cpf: Faker::CPF.numeric,
  sus_code: Faker::Number.number(digits: 15)
)
# puts "Created patient [#{patient.id}] #{patient.first_name} by #{patient.last_name}"

patient = Patient.create(
  first_name: "João",
  last_name: "Francisco",
  gender: "M",
  patient_type: "receptor",
  born_at: Faker::Date.birthday,
  address: "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil",
  cpf: Faker::CPF.numeric,
  sus_code: Faker::Number.number(digits: 15)
)
# puts "Created patient [#{patient.id}] #{patient.first_name} by #{patient.last_name}"

patient = Patient.create(
  first_name: "Marya",
  last_name: "Jullyane",
  gender: "F",
  patient_type: "receptor",
  born_at: Faker::Date.birthday,
  address: "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil",
  cpf: Faker::CPF.numeric,
  sus_code: Faker::Number.number(digits: 15)
)
# puts "Created patient [#{patient.id}] #{patient.first_name} by #{patient.last_name}"

patient = Patient.create(
  first_name: "Junior",
  last_name: "Olimpio",
  gender: "M",
  patient_type: "donor",
  born_at: Faker::Date.birthday,
  address: "SCN Quadra 2, Brasília, Distrito Federal, Brasil",
  cpf: Faker::CPF.numeric,
  sus_code: Faker::Number.number(digits: 15)
)
# puts "Created patient [#{patient.id}] #{patient.first_name} by #{patient.last_name}"

patient = Patient.create(
  first_name: "Leia",
  last_name: "Silva",
  gender: "F",
  patient_type: "receptor",
  born_at: Faker::Date.birthday,
  address: "SCN Quadra 2, Brasília, Distrito Federal, Brasil",
  cpf: Faker::CPF.numeric,
  sus_code: Faker::Number.number(digits: 15)
)

patient = Patient.create(
  first_name: "Evandro",
  last_name: "Souza",
  gender: "M",
  patient_type: "receptor",
  born_at: Faker::Date.birthday,
  address: "Catetinho, Park Way, Distrito Federal, Brasil",
  cpf: Faker::CPF.numeric,
  sus_code: Faker::Number.number(digits: 15)
)

10.times do
  patient = Patient.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: ["M", "F"].sample,
    patient_type: ["receptor", "donor", "not_relative"].sample,
    born_at: Faker::Date.birthday,
    address: ["Catetinho, Park Way, Distrito Federal, Brasil",
              "SCN Quadra 2, Brasília, Distrito Federal, Brasil",
              "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil"].sample,
    cpf: Faker::CPF.numeric,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end

# puts "Created patient [#{patient.id}] #{patient.first_name} by #{patient.last_name}"

puts "...Created #{Patient.count} patients. PATIENTS DONE!"
##### END - SEED - Patients #####

##### BEGIN - SEED - Families #####
puts " "
puts "Joining families... 'I am your father.'"

joao = Patient.find_by_first_name("João")

family = Family.new
family.receptor = joao
family.donor = Patient.find_by_first_name("Ana")
family.relationship = "MÃE"
family.save!
puts "Criou parente [#{family.id}] #{family.donor.first_name} id[#{family.donor.id}] que é #{family.relationship} de #{family.receptor.first_name} #{family.receptor.last_name} [#{family.receptor.id}]"

family = Family.new
family.receptor = joao
family.donor = Patient.find_by_first_name("Junior")
family.relationship = "FILHO/FILHA"
family.save!
puts "Criou parente [#{family.id}] #{family.donor.first_name} id[#{family.donor.id}] é #{family.relationship} de #{family.receptor.first_name} #{family.receptor.last_name} [#{family.receptor.id}]"

5.times do
  family = Family.create(
    receptor: Patient.where(patient_type: "receptor").sample,
    donor: Patient.where(patient_type: "donor").sample,
    relationship: ["MÃE", "PAI", "IRMÃO/IRMÃ", "FILHO/FILHA", "CÔNJUGE",
                   "COMPANHEIRA/COMPANHEIRO", "AVÔ/AVÓ",
                   "PRIMO/PRIMA", "TIO/TIA", "OUTRO"].sample
  )
end

puts "...Criou #{Family.count} parentes. FAMILIES DONE!"
##### END - SEED - Families #####

puts " "
puts "Creating new doctors..."

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

doctors.each do |doctor|
  doc = Doctor.create(doctor)
  # puts "Created doctor #{doc.first_name} #{doc.last_name} - CRM #{doc.crm} with ID #{doc.id}"
end

puts "...Created #{Doctor.count} doctors. DOCTORS DONE!"

# INI SAMPLES
puts " "
puts "Creating new samples DB..."

250.times do
  sample = Sample.create(
    patient: Patient.all.sample,
    doctor: Doctor.all.sample,
    category: ["Sangue", "Soro", "Segmento de cordão"].sample
  )
  sample.observation = "Esta é a observação para a sample com id #{sample.id}"
  sample.save!
  # puts "Created sample with id #{sample.id} and category #{sample.category}"
end

puts "...Created #{Sample.count} samples without a batch. SAMPLES DONE!"

# INI BATCHES ONLY AFTER SAMPLES ALREADY EXIST
puts " "
puts "Creating batches and attaching samples..."
# puts samples into batches but leaves at least 5 samples without a batch
n_samples = Sample.count
senders = User.where(role: 'Envio')
until n_samples <= 50
  # creates a new empty batch
  date_sent = Date.today - rand(360)
  batch = Batch.create!(sender: senders.sample, sent_at: date_sent)
  # puts "Created empty batch [#{batch.id}], sent #{batch.sent_at} from #{batch.sender.institution} by #{batch.sender.email} | not yet received"

  # Attaches 2 to 5 samples in the batch
  rand(2..5).times do
    sample = Sample.find_by_batch_id(nil)
    sample.batch = batch
    sample.collected_at = batch.sent_at - rand(3)
    sample.save!
    # puts "Put sample [#{sample.id}] collected on #{sample.collected_at} into batch [#{sample.batch.id}]"
    n_samples -= 1
  end
  batch.save!
end

# Set received date on all batches except 10 batches that will be in transit
n_batches = Batch.where(received_at: nil).count
until n_batches == 10
  batch = Batch.find_by_received_at(nil)
  batch.receiver = receiver
  batch.received_at = batch.sent_at + rand(3)
  batch.save!
  # puts "Batch [#{batch.id}] sent at #{batch.sent_at} was received at #{batch.received_at}"
  n_batches -= 1
end

# Creates batches that have not been sent yet (pendentes)
# because sender can edit until sent_at date is sumitted
10.times do
  batch = Batch.create!(sender: sender)
  # puts "Created empty batch [#{batch.id}], sent #{batch.sent_at} from #{batch.sender.institution} by #{batch.sender.email} | not yet received"
  # Attaches 2 samples in the batch
  2.times do
    sample = Sample.find_by_batch_id(nil)
    sample.batch = batch
    sample.save!
    # puts "Put sample [#{sample.id}] collected on #{sample.collected_at} into batch [#{sample.batch.id}]"
    n_samples -= 1
  end
  batch.save!
end

puts "...Created #{Batch.count} batches with #{Sample.where('batch_id IS NOT ?', nil).count} samples"
puts "...#{Batch.where('received_at IS NOT ?', nil).count} batches were received"
puts "...#{Batch.where('received_at IS ? AND sent_at IS NOT ?', nil, nil).count} batches were sent but are not received yet"
puts "...#{Batch.where(sent_at: nil).count} batches were not sent yet"
puts "...#{Sample.where(batch_id: nil).count} samples are not on a batch yet"
puts "BATCHES DONE WITH SAMPLES!"
# END BATCHES

puts " "
puts "Creating exams..."
10.times do
  exam = Exam.create(
    sample: Sample.all.sample,
    procedure: Procedure.all.sample
  )
  # puts "Created exam id #{exam.id} to sample #{exam.sample.id} with procedure #{exam.procedure.id}"
end

puts "...Created #{Exam.count} exams. EXAMS DONE!"

puts " "
puts "FINISHED SEEDING!"
puts " "
