# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning User DB"
User.destroy_all
puts "Cleaning Batch DB"
Batch.destroy_all
puts "DataBases clean!"

puts " "
puts "SEEDING STARTED!"

user = User.create!(
  first_name: 'Cláudia',
  last_name: 'Tanaka',
  email: 'cakemit@gmail.com',
  password: '123456',
  role: 'Envio de amostras',
  institution: 'Hospital Einstein',
  cpf: '12345678901',
  admin: true
)
puts "Created user [#{user.id}] #{user.first_name} #{user.last_name} | #{user.email} | admin? #{user.admin}"

user = User.create!(
  first_name: 'Vinicius',
  last_name: 'Stelet',
  email: 'vinicius.bootcam@gmail.com',
  password: '123456',
  role: 'Recepção de amostras',
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
  role: 'Envio de amostras',
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
  role: 'Recepção de amostras',
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
  role: 'Recepção de amostras',
  institution: 'Inca'
)
puts "Created user [#{receiver.id}] #{receiver.first_name} #{receiver.last_name} | #{receiver.email} | admin? #{receiver.admin}"

sender = User.create!(
  first_name: 'Envio',
  last_name: 'de Amostras',
  email: 'envio@teste.com',
  password: '123456',
  role: 'Envio de amostras',
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
  puts "Created batch [#{batch.id}], sent #{batch.sent_at} by #{batch.sender.first_name} | not received"
end


puts " "
puts "Created #{Batch.count} batches"
puts " "
puts "FINISHED SEEDING!"
