# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ARTISTAS
# IGUANA GARCIA
iguana_garcia = Artist.create!(name: 'Iguana Garcia', bio: "Iguana Garcia é um produtor e multi-instrumentista português. Embaixador do 'dolce far niente' lisboeta enquanto dono de uma singular visão electrónica pop experimental. Iguana apresenta-se em palco com uma ilha de teclados e guitarras flaureados pelo saxofone tenor de João Santos. Nas cabines, seleciona tribalismos house produzidos pelo próprio.")

# ALBUMS
# Ilha Da Iguana
Album.create!(title: 'Ilha Da Iguana', year:2021, description: "'Ilha Da Iguana' é o terceiro álbum de originais de Iguana Garcia. Bloqueado geograficamente, o mar do artista lisboeta só podia ser um. Embarcou com uma tripulação de MIDIs piratas, a drum machine como primeiro imediata, poeta na linguagem dos 0s e 1s. O objectivo era encontrar as correntes do house e do techno, não abandonando a pop, e ver que lugar terá a língua de Camões em tais latitudes. A guitarra ficou em terra. São 10 cantigas que contam o naufrágio de 2020 e 2021 para a música de dança, de olhos posto em futuras pistas.", genre: 'Indie-House', catalog_number: 'DILP002', artist: iguana_garcia)
# Ilha Da Iguana - TRACKS
