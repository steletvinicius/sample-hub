# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning ALL databases..."

Exam.destroy_all if Exam.count > 0
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

cd_sus_procedures = [
  "05.01.02.001-2",
  "05.01.02.002-0",
  "05.01.01.002-5",
  "05.01.01.003-3",
  "05.01.01.004-1"
]

procedure_titles = [
  "IDENTIFICACAO DE RECEPTOR DE CELULAS-TRONCO HEMATOPOETICAS 1A FASE",
  "IDENTIFICACAO DE RECEPTOR DE CELULAS-TRONCO HEMATOPOETICAS 2A FASE",
  "IDENTIFICACAO DE DOADOR APARENTADO DE CELULAS-TRONCO HEMATOPOETICAS 1A FASE (POR DOADOR TIPADO)",
  "IDENTIFICACAO DE DOADOR APARENTADO DE CELULAS-TRONCO HEMATOPOETICAS 2A FASE (POR DOADOR TIPADO)",
  "IDENTIFICACAO DE DOADOR APARENTADO DE CELULAS-TRONCO HEMATOPOETICAS 3A FASE (POR DOADOR TIPADO)"
]

descriptions = [
  "CONSISTE NA TIPIFICACAO DE HLA-A, B - CLASSE I, POR SOROLOGIA OU POR TESTE MOLECULAR COM TECNICAS DE BAIXA RESOLUCAO
  POR DNA E DA TIPIFICACAO DE HLA -DR, DQ - CLASSE II POR TESTE MOLECULAR COM TECNICAS DE BAIXA RESOLUCAO POR DNA. NA
  PRIMEIRA FASE DA IDENTIFICACAO DO RECEPTOR DEVEM SER REALIZADOS ESSES DOIS EXAMES PREVISTOS",
  "CONSISTE NA TIPIFICACAO DE HLA-DR, DQ - CLASSE II POR TESTE MOLECULAR COM TECNICAS DE ALTA RESOLUCAO POR DNA. O
  EXAME PREVISTO NA SEGUNDA FASE DEVERA SER REALIZADO SOMENTE NAQUELES RECEPTORES QUE JA TENHAM TIDO DOADOR INICIALMENTE
  COMPATIVEL, IDENTIFICADO POR TESTES DE CLASSE I E CLASSE II DE BAIXA RESOLUCAO",
  "CONSISTE NA TIPIFICACAO DE HLA-A, B - CLASSE I, POR SOROLOGIA OU POR TESTE MOLECULAR COM TECNICAS DE BAIXA RESOLUCAO
  POR DNA. ESSE EXAME DEVERA SER FEITO APENAS EM APARENTADOS DE PRIMEIRO GRAU, AUTORIZADOS EM GRUPO DE ATE 05 PESSOAS,
  REPETIDOS ATE A IDENTIFICACAO DO DOADOR NESTA FASE",
  "CONSISTE NA TIPIFICACAO HLA-DR, DQ - CLASSE II POR TESTE MOLECULAR COM TECNICAS DE BAIXA RESOLUCAO POR DNA. O
  EXAME PREVISTO NA SEGUNDA FASE DEVERA SER REALIZADO NAQUELES DOADORES QUE JA TENHAM SIDO CONSIDERADOS COMPATIVEIS
  NA PRIMEIRA FASE",
  "CONSISTE NA TIPIFICACAO HLA-DR, DQ - CLASSE II POR TESTE MOLECULAR COM TESTE DE ALTA RESOLUCAO POR DNA. O EXAME
  PREVISTO NA TERCEIRA FASE DEVERA SER REALIZADO QUANDO NECESSARIO EM APENAS UM UNICO DOADOR IDENTIFICADO QUE
  TENHA SIDO CONSIDERADO O MAIS COMPATIVEL NA SEGUNDA FASE"
]

resolutions = ["baixa", "media", "alta"]

hla_loci = [
  "HLA-A",
  "HLA-B",
  "HLA-C",
  "HLA-DRB1",
  "HLA-DQB1",
  "HLA-DPB1",
  "HLA-DRB3",
  "HLA-DRB4",
  "HLA-DRB5",
  "HLA-DQA1",
  "HLA-DPA1"
]


x = 0
loop do
  procedure = Procedure.create!(
    cd_sus_procedure: cd_sus_procedures[x],
    procedure_title: procedure_titles[x],
    description: descriptions[x]
  )
  puts "Procedure #{procedure.procedure_title} created."
  x += 1
  break unless x < cd_sus_procedures.length
end

puts "Created #{Procedure.count} SUS procedures. PROCEDURES DONE!"

## Criação de Usuários #############

puts " "
puts "Creating users..."
puts "Creating ADMINS..."

cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

user = User.create!(
  first_name: 'Cláudia',
  last_name: 'Tanaka',
  email: 'cakemit@gmail.com',
  password: '123456',
  role: 'Recepção',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf,
  admin: true
)
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"


cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

user = User.create!(
  first_name: 'Vinicius',
  last_name: 'Stelet',
  email: 'vinicius.bootcamp@gmail.com',
  password: '123456',
  role: 'Recepção',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf,
  admin: true
)
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"

cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

user = User.create!(
  first_name: 'Edson',
  last_name: 'Dario',
  email: 'edson.dario@gmail.com',
  password: '123456',
  role: 'Recepção',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf,
  admin: true
)
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"

cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

user = User.create!(
  first_name: 'Luis Henrique',
  last_name: 'Simões',
  email: 'luishenriquesimoes@yahoo.com.br',
  password: '123456',
  role: 'Cadastro',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf,
  admin: true
)
puts "Created admin user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email}"



############## RECEPÇÃO NOT ADMIN ################
cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

receiver = User.create!(
  first_name: 'Vinicius',
  last_name: 'Stelet',
  email: 'vinicius@inca.gov.br',
  password: '123456',
  role: 'Recepção',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf,
  admin: false
)
puts "Created receiver   [#{receiver.id}] #{receiver.first_name} #{receiver.last_name} | #{receiver.email}"

############## ENVIO NOT ADMIN ################
cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

sender = User.create!(
  first_name: 'Ana',
  last_name: 'Pontes',
  email: 'ana@envio.com',
  password: '123456',
  role: 'Envio',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf
)
puts "Created sender     [#{sender.id}] #{sender.first_name} #{sender.last_name} | #{sender.email}"

############## CADASTRO NOT ADMIN ################
cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

cadastro = User.create!(
  first_name: 'Luis',
  last_name: 'Simões',
  email: 'luis@inca.gov.br',
  password: '123456',
  role: 'Cadastro',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf
)

############## CADASTRO NOT ADMIN ################
cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

cadastro = User.create!(
  first_name: 'Thiago',
  last_name: 'Silva',
  email: 'thiago@inca.gov.br',
  password: '123456',
  role: 'Cadastro',
  institution: 'Instituto Nacional de Câncer',
  cpf: cpf
)
puts "Created sender cadastro [#{cadastro.id}] #{cadastro.first_name} #{cadastro.last_name} | #{cadastro.email}"

############# CADASTRO USUÁRIO HOSPITAL DA LAGOA ########
cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

cadastro = User.create!(
  first_name: 'Henrique',
  last_name: "Craveiro",
  email: 'henrique@hospitaldalagoa.gov.br',
  password: '123456',
  role: 'Envio',
  institution: 'Hospital da Lagoa',
  cpf: cpf
)
puts "Created sender cadastro [#{cadastro.id}] #{cadastro.first_name} #{cadastro.last_name} | #{cadastro.email}"

############# CADASTRO USUÁRIO HOSPITAL DOS SERVIDORES ##
cpf = Faker::CPF.numeric
cpf[0-2] = rand(100...999).to_s

cadastro = User.create!(
  first_name: 'Alberto',
  last_name: 'Oliveira',
  email: 'albert@hospitaldosservidores.gov.br',
  password: '123456',
  role: 'Envio',
  institution: 'Hospital dos Servidores',
  cpf: cpf
)
puts "Created sender cadastro [#{cadastro.id}] #{cadastro.first_name} #{cadastro.last_name} | #{cadastro.email}"

puts "...Created #{User.count} users. USERS DONE!"


##### BEGIN - SEED - Patients #####
puts " "
puts "Make patients... 'May the Force be with you.'"

puts "Creating 100 patients"

address = [
            "Brasília, Distrito Federal, Brasil",
            "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil",
            "SCN Quadra 2, Brasília, Distrito Federal, Brasil",
            "Catetinho, Park Way, Distrito Federal, Brasil",
            "Avenida Dom helder Câmara, 5474 - Cachambi, Rio de Janeiro - RJ, 20771-050",
            "Rua Adolfo Bergamini, 29 - Engenho de Dentro, Rio de Janeiro - RJ - 20730-000",
            "Avenida Braz de pina, 276 - Penha, Rio de Janeiro - RJ, 21070-032",
            "Avenida Pastor Martin Luther King Junior, 126 - Del Castilho - Rio de Janeiro - RJ",
            "Avenida Vicente de Carvalho, 909 - Vicente de Carvalho, Rio de Janeiro - RJ, 21210-000"
            ]


patient_types = ["not_relative", "receptor", "donor"]



puts "Creating  male patients"

################################################
puts "Creating 10 male receptors not relative"

(1..10).each do
  cpf = Faker::CPF.numeric
  cpf[0-2] = rand(100...999).to_s

  patient = Patient.create!(
    first_name: Faker::Name.male_first_name,
    last_name: Faker::Name.last_name,
    gender: "M",
    patient_type: patient_types[0],
    born_at: Faker::Date.birthday,
    address: address.sample,
    cpf: cpf,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end
puts "Created 10 male receptors not relative"


################################################
puts "Creating 10 FEmale receptors not relative"
(1..10).each do
  cpf = Faker::CPF.numeric
  cpf[0-2] = rand(100...999).to_s

  patient = Patient.create!(
    first_name: Faker::Name.female_first_name,
    last_name: Faker::Name.last_name,
    gender: "F",
    patient_type: patient_types[0],
    born_at: Faker::Date.birthday,
    address: address.sample,
    cpf: cpf,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end
puts "Created 10 FEmale receptors not relative"
################################################

################################################
puts "Creating 10 Male receptors relative"
(1..10).each do

  cpf = Faker::CPF.numeric
  cpf[0-2] = rand(100...999).to_s

  patient = Patient.create!(
    first_name: Faker::Name.male_first_name,
    last_name: Faker::Name.last_name,
    gender: "M",
    patient_type: patient_types[1],
    born_at: Faker::Date.birthday,
    address: address.sample,
    cpf: cpf,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end
puts "Created 10 male receptors relative"
################################################

################################################
puts "Creating 10 feMale receptors relative"
(1..10).each do

  cpf = Faker::CPF.numeric
  cpf[0-2] = rand(100...999).to_s

  patient = Patient.create!(
    first_name: Faker::Name.female_first_name,
    last_name: Faker::Name.last_name,
    gender: "F",
    patient_type: patient_types[1],
    born_at: Faker::Date.birthday,
    address: address.sample,
    cpf: cpf,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end
puts "Created 10 feMale receptors relative"
################################################



################################################
puts "Creating 30 Male donors"
(1..30).each do

  cpf = Faker::CPF.numeric
  cpf[0-2] = rand(100...999).to_s

  patient = Patient.create!(
    first_name: Faker::Name.male_first_name,
    last_name: Faker::Name.last_name,
    gender: "M",
    patient_type: patient_types[2],
    born_at: Faker::Date.birthday,
    address: address.sample,
    cpf: cpf,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end
puts "Created 30 male donors"
################################################

################################################
puts "Creating 30 female donors"
(1..30).each do

  cpf = Faker::CPF.numeric
  cpf[0-2] = rand(100...999).to_s

  patient = Patient.create!(
    first_name: Faker::Name.female_first_name,
    last_name: Faker::Name.last_name,
    gender: "F",
    patient_type: patient_types[2],
    born_at: Faker::Date.birthday,
    address: address.sample,
    cpf: cpf,
    sus_code: Faker::Number.number(digits: 15)
  )
  puts "Created patient #{patient.id} #{patient.first_name}, #{patient.born_at.strftime('%d/%m/%Y')} by #{patient.last_name}"
end
puts "Created 30 feMale donors"
################################################


################################################
puts "Creating 20 families from 20 related receptors with 03 related donors"
all_related_receptors = Patient.where(patient_type: "receptor")
all_donors = Patient.where(patient_type: "donor")

# ##### BEGIN - SEED - Families #####
y = 0

relationships = ["MÃE/PAI", "IRMÃO/IRMÃ", "FILHO/FILHA"]

(1..20).each do |x|
  receptor = all_related_receptors[x-1]

  (1..3).each do |z|
    donor = all_donors[y]
    family = Family.create(
      receptor: receptor,
      donor: donor,
      relationship: relationships.sample
      )
    y += 1
  end
end

puts "...Criou #{Family.count} parentes. FAMILIES DONE!"
##### END - SEED - Families #####

##### BEGIN - Doctors - #####
puts " "
puts "Creating new doctors..."

doctors = [
  { first_name: "Laura",    last_name: "Meyer",         crm: "52.96891-9" },
  { first_name: "Rafael",   last_name: "Ono Furukawa",  crm: "52.96988-0" },
  { first_name: "Juliana",  last_name: "O. Matias",     crm: "52.89952-6" },
  { first_name: "Simone",   last_name: "Maradei",       crm: "52.65510-4" },
  { first_name: "Mayara",   last_name: "Rêgo",          crm: "52.98995-9" }
]

doctors.each do |doctor|
  doc = Doctor.create(doctor)
  puts "Created doctor #{doc.first_name} #{doc.last_name} - CRM #{doc.crm} with ID #{doc.id}"
end

puts "...Created #{Doctor.count} doctors. DOCTORS DONE!"

##### FINISH - Doctors - #####

# INI SAMPLES
puts " "
puts "Creating new samples DB..."

all_patients = Patient.all
patient_count = Patient.count

y = 0

(1..patient_count).each do |x|
  category = ["Sangue", "Soro", "Segmento de cordão"].sample
  doctor = Doctor.all.sample

    if x > 5
    sample = Sample.create!(
        collected_at: DateTime.now - 1,
        quantity: rand(1..2),
        patient: all_patients[x-1],
        doctor: doctor,
        category: category,
        status: "incompleta"
      )
    # Amostra da tabela da view samples#index 05
    else
      sample = Sample.create!(
        patient: all_patients[x-1],
        doctor: doctor,
        category: category,
        status: "criada"
      )
    end
    y += 1
end


puts "...Created #{Sample.count} samples without a batch. SAMPLES DONE!"
### ####

### 15 Amostras para os cards #######


samples = Sample.where.not(collected_at: nil).last(80)


### 15 Amostras para os cards #######


### Amostras para os batches #######
receivers = User.where(role: "Recepção")

### Batch com 6 amostras #######
# samples_batch_recebido_Hospital_lagoa = samples[0..7]
samples_batch_recebido_Hospital_lagoa = samples[0..5]
senders = User.where(role: 'Envio', institution:"Hospital da Lagoa")
date_sent = Date.today - 3
date_received = Date.today
batch = Batch.create(sender: senders.sample, sent_at: date_sent, received_at:date_received, receiver: receivers.sample)
samples_batch_recebido_Hospital_lagoa.each do |sample|
  sample.batch = batch
  sample.status = "recebida"
  sample.save!
end


### Batch com 5 amostras #######
samples_batch_recebido_Hospital_servidores = samples[8..12]
senders = User.where(role: 'Envio', institution:"Hospital dos Servidores")
date_sent = Date.today - 4
date_received = Date.today - 1
batch = Batch.create(sender: senders.sample, sent_at: date_sent, received_at:date_received, receiver: receivers.sample)

samples_batch_recebido_Hospital_servidores.each do |sample|
  sample.batch = batch
  sample.status = "recebida"
  sample.save!
end

### Batch com 4 amostras #######
samples_batch_recebido_INCA_1 = samples[16..19]
senders = User.where(role: 'Envio', institution:"Instituto Nacional de Câncer")
date_sent = Date.today - 4
date_received = Date.today - 1
batch = Batch.create(sender: senders.sample, sent_at: date_sent, received_at:date_received, receiver: receivers.sample)

samples_batch_recebido_INCA_1.each do |sample|
  sample.batch = batch
  sample.status = "recebida"
  sample.save!
end


### Batch com 8 amostras #######
samples_batch_recebido_INCA_2 = samples[24..31]
date_sent = Date.today - 5
date_received = Date.today - 2
batch = Batch.create(sender: senders.sample, sent_at: date_sent, received_at:date_received, receiver: receivers.sample)

samples_batch_recebido_INCA_2.each do |sample|
  sample.batch = batch
  sample.status = "recebida"
  sample.save!
end



### Batch com 3 amostras #######
samples_batch_recebido_INCA_3 = samples[32..34]
date_sent = Date.today - 6
date_received = Date.today - 3
batch = Batch.create(sender: senders.sample, sent_at: date_sent, received_at:date_received, receiver: receivers.sample)

samples_batch_recebido_INCA_3.each do |sample|
  sample.batch = batch
  sample.status = "recebida"
  sample.save!
end

### Batch com 8 amostras #######
samples_batch_recebido_INCA_4 = samples[40..47]
date_sent = Date.today - 7
date_received = Date.today - 4
batch = Batch.create(sender: senders.sample, sent_at: date_sent, received_at:date_received, receiver: receivers.sample)

samples_batch_recebido_INCA_4.each do |sample|
  sample.batch = batch
  sample.status = "recebida"
  sample.save!
end

### Batch com 2 amostras #######
samples_batch_enviado_INCA_1 = samples[48..49]
date_sent = Date.today -1
date_received = Date.today
batch = Batch.create(sender: senders.sample, sent_at: date_sent)

samples_batch_enviado_INCA_1.each do |sample|
  sample.batch = batch
  sample.status = "enviada"
  sample.save!
end


### Batch com 4 amostras #######
samples_batch_enviado_INCA_2 = samples[56..59]
date_sent = Date.today -1
date_received = Date.today
batch = Batch.create(sender: senders.sample, sent_at: date_sent)

samples_batch_enviado_INCA_2.each do |sample|
  sample.batch = batch
  sample.status = "enviada"
  sample.save!
end


### Batch com 7 amostras #######
samples_batch_naoenviado_INCA_1 = samples[64..70]
date_sent = Date.today -1
batch = Batch.create(sender: senders.sample)

samples_batch_naoenviado_INCA_1.each do |sample|
  sample.batch = batch
  sample.status = "coletada"
  sample.save!
end


### Batch com 6 amostras #######
samples_batch_naoenviado_INCA_2 = samples[72..77]
date_sent = Date.today -1
batch = Batch.create(sender: senders.sample)
samples_batch_naoenviado_INCA_2.each do |sample|
  sample.batch = batch
  sample.status = "coletada"
  sample.save!
end


######### Registro na tabela exams ##########

procedures_receptor = Procedure.where(cd_sus_procedure:"05.01.02.001-2").or(Procedure.where(cd_sus_procedure:"05.01.02.002-0"))

p procedures_receptor

procedures_donor = Procedure.where(cd_sus_procedure:"05.01.01.002-5").or(Procedure.where(cd_sus_procedure:"05.01.01.003-3"))

p procedures_donor

cd_sus_procedures = [
  "05.01.02.001-2",
  "05.01.02.002-0",
  "05.01.01.002-5",
  "05.01.01.003-3",
  "05.01.01.004-1"
]


def set_exam
  Sample.all.each do |sample|
    if sample.patient.patient_type == 'donor'
        set_exam_donor(sample)
    else
      set_exam_receptor(sample)
    end
  end
end

def set_exam_receptor(sample)
  # Criar 2 registros de exames na tabela
  Procedure.where(cd_sus_procedure:"05.01.02.001-2").or(Procedure.where(cd_sus_procedure:"05.01.02.002-0")).find_each do |procedure|
  # procedures_receptor.each do |procedure|
    exam = Exam.new
    exam.sample = sample
    exam.procedure = procedure
    exam.save!
    puts "Exam #{exam.id} - #{exam.procedure.cd_sus_procedure} for #{sample.patient.patient_type} sample #{sample.id} CREATED"
  end
end

def set_exam_donor(sample)
# Criar 3 registros de exames na tabela exams
Procedure.where(cd_sus_procedure:"05.01.01.002-5").or(Procedure.where(cd_sus_procedure:"05.01.01.003-3")).find_each do |procedure|
  # procedures_donor.each do |procedure|
    exam = Exam.new
    exam.sample = sample
    exam.procedure = procedure
    exam.save!
    puts "Exam #{exam.id} - #{exam.procedure.cd_sus_procedure} for #{sample.patient.patient_type} sample #{sample.id} CREATED"
  end
end

puts "Atribuindo exames às amostras criadas"

set_exam

puts "Created #{Exam.count} exams"


## Creating Chatroom ################
chatroom = Chatroom.create!(name: "work")

puts "Created chatroom #{chatroom.name}."

puts "Que exagero!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

