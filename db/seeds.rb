# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##### BEGIN - SEED - Patients #####
puts "Make patients... 'May the Force be with you.'"
Patient.create(
  first_name: "Luke",
  last_name: "Skywalker",
  gender: "M",
  born_at: "01/03/1970",
  address: "Brasília, Distrito Federal, Brasil",
  cpf: "26741219048",
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
  first_name: "Obi-Wan",
  last_name: "Kenobi",
  gender: "M",
  born_at: "03/04/1965",
  address: "Parque da Cidade Dona Sarah Kubitschek, Brasília, Distrito Federal, Brasil",
  cpf: "85154396030",
  sus_code: "214233320680006"
)
puts "Patients ready. 'Your eyes can deceive you, don't trust them.'"
##### END - SEED - Patients #####
