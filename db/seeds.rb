# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Deleting all the entries from the DB...'
Artist.delete_all
Album.delete_all
Track.delete_all

puts 'Seeding information...'
# ARTISTAS
# IGUANA GARCIA
iguana_garcia = Artist.create!(name: 'Iguana Garcia', bio: "Iguana Garcia é um produtor e multi-instrumentista português. Embaixador do 'dolce far niente' lisboeta enquanto dono de uma singular visão electrónica pop experimental. Iguana apresenta-se em palco com uma ilha de teclados e guitarras flaureados pelo saxofone tenor de João Santos. Nas cabines, seleciona tribalismos house produzidos pelo próprio.")

# ALBUMS
# Ilha Da Iguana
ilha_da_iguana = Album.create!(title: 'Ilha Da Iguana', year: 2021, description: "'Ilha Da Iguana' é o terceiro álbum de originais de Iguana Garcia. Bloqueado geograficamente, o mar do artista lisboeta só podia ser um. Embarcou com uma tripulação de MIDIs piratas, a drum machine como primeiro imediata, poeta na linguagem dos 0s e 1s. O objectivo era encontrar as correntes do house e do techno, não abandonando a pop, e ver que lugar terá a língua de Camões em tais latitudes. A guitarra ficou em terra. São 10 cantigas que contam o naufrágio de 2020 e 2021 para a música de dança, de olhos posto em futuras pistas.", genre: 'Indie-House', catalog_number: 'DILP002', artist: iguana_garcia)
# Ilha Da Iguana - TRACKS
Track.create!(title: 'Ilha Da Iguana', tracks_number: 1, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249024/disco%20interno/mp3/ilha%20da%20iguana/01_IlhaDaIguana_j6frfo.mp3')
Track.create!(title: 'Monotonia', tracks_number: 2, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249015/disco%20interno/mp3/ilha%20da%20iguana/02_Monotonia_vgwsf8.mp3')
Track.create!(title: 'Tarraxo do Animal Doméstico', tracks_number: 3, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249017/disco%20interno/mp3/ilha%20da%20iguana/03_TarraxoDoAnimalDomestico_ldpjoo.mp3')
Track.create!(title: 'Sunset Drive', tracks_number: 4, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249016/disco%20interno/mp3/ilha%20da%20iguana/04_SunsetDrive_pbi8qu.mp3')
Track.create!(title: 'Saudades', tracks_number: 5, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249005/disco%20interno/mp3/ilha%20da%20iguana/05_Saudades_o1vvjy.mp3')
Track.create!(title: 'Dança da Lua', tracks_number: 6, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249025/disco%20interno/mp3/ilha%20da%20iguana/06_Dan%C3%A7aDaLua_cre8i4.mp3')
Track.create!(title: 'Fixação', tracks_number: 7, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249015/disco%20interno/mp3/ilha%20da%20iguana/07_Fixa%C3%A7%C3%A3o_t3mltr.mp3')
Track.create!(title: 'Matrix da Pátria', tracks_number: 8, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249013/disco%20interno/mp3/ilha%20da%20iguana/08_MatrixDaPatria_qhf0eo.mp3')
Track.create!(title: 'A Gruta', tracks_number: 9, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249022/disco%20interno/mp3/ilha%20da%20iguana/09_AGruta_u8aika.mp3')
Track.create!(title: 'Bolero Digital', tracks_number: 10, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249014/disco%20interno/mp3/ilha%20da%20iguana/10_BoleroDigital_uwwlnf.mp3')

puts 'Done!'
