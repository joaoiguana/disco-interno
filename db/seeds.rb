require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Deleting all the entries from the DB...'
Track.delete_all
Album.delete_all
Artist.delete_all

puts 'Seeding information...'
# ARTISTAS
# Yakuza
yakuza_cover = URI.open('https://res.cloudinary.com/doa9kh79y/image/upload/v1672748148/disco%20interno/artists/yakuza/_DSF0163_zxuqrm.jpg')
yakuza = Artist.new(name: 'Yakuza', bio: "Serpenteando entre os movimentos contemporâneos — do jazz londrino à fusão japonesa –, Afonso Serro, Pedro Ferreira e André Santos são a base de uma colectivo que cria, numa perspectiva urbana, um estilo característico, uma dança melodiosa com um groove e um flow cheios de harmonias perigosas. Entre paisagens sonoras que permitem a levitação e influências electrónicas que prometem fazer qualquer um bater o pé no chão")
yakuza.photos.attach(io: yakuza_cover, filename: 'yakuza.jpg', content_type: 'image/jpg')
yakuza.save

# IGUANA GARCIA
iguana_cover = URI.open('https://res.cloudinary.com/doa9kh79y/image/upload/v1672251008/disco%20interno/artists/iguana%20garcia/000050_dspf47.jpg')
iguana_garcia = Artist.new(name: 'Iguana Garcia', bio: "Iguana Garcia é um produtor e multi-instrumentista português. Embaixador do 'dolce far niente' lisboeta enquanto dono de uma singular visão electrónica pop experimental. Iguana apresenta-se em palco com uma ilha de teclados e guitarras flaureados pelo saxofone tenor de João Marques. Nas cabines, seleciona tribalismos house produzidos pelo próprio.")
iguana_garcia.photos.attach(io: iguana_cover, filename: 'iguana-garcia.jpg', content_type: 'image/jpg')
iguana_garcia.save

# ALBUMS
# Aileron
aileron = Album.create!(title: 'Aileron', year: 2020, description: "O conceito que estrutura AILERON não é típico, nem comum. Dar de caras com um álbum jazz que retrata um meio urbano, feito de noite, carros velozes, derrapagens e excessos não deixa de constituir uma experiência ‘diferente’. No entanto, tendo em conta aquilo que está a ser feito nos últimos tempos no universo jazz, não devemos ficar surpreendidos com a estética deste projeto. A atual mente jazzística, que foi tomada de assalto por jovens cheios de música e diferentes influências dentro de si, funciona de acordo com as seguintes palavras de ordem:  experimentar, inventar e criar. Por alguma razão, ao longo dos últimos anos, temos vindo a assistir a um crescimento do dito London Jazz e ao aparecimento de uma fornada incontável de artistas que, sendo simultaneamente feitos de jazz (do puro) e de influências ‘HTTP’ oriundas da internet", genre: 'Acid-Jazz', catalog_number: 'DILP001', artist: yakuza, photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg', artist_name: 'Yakuza')

# Aileron - TRACKS
Track.create!(title: 'Tuning', tracks_number: 1, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748436/disco%20interno/mp3/aileron/01_TUNING_mumrmr.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')
Track.create!(title: 'Aileron Pt.I', tracks_number: 2, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748429/disco%20interno/mp3/aileron/02_AILERON_-_Pt._I_sl9uil.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')
Track.create!(title: 'Aileron Pt.II', tracks_number: 3, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748440/disco%20interno/mp3/aileron/03_AILERON_-_Pt._II_xslszd.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')
Track.create!(title: 'Picheleira feat Ricardo Jesus & Diogo Costa', tracks_number: 4, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748457/disco%20interno/mp3/aileron/04_PICHELEIRA_feat._Ricardo_Jesus_Diogo_Costa_y0xnep.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')
Track.create!(title: 'Furto feat Bruno Vieira', tracks_number: 5, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748446/disco%20interno/mp3/aileron/05_FURTO_feat._Bruno_Vieira_jxb1t4.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')
Track.create!(title: 'Katana feat Pedro Ferreira', tracks_number: 6, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748444/disco%20interno/mp3/aileron/06_KATANA_feat._Pedro_Ferreira_bvxdz8.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')
Track.create!(title: 'Adagio', tracks_number: 7, artist: yakuza, album: aileron, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748437/disco%20interno/mp3/aileron/07_ADAGIO_m5urmz.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg')

# Ilha Da Iguana
ilha_da_iguana = Album.create!(title: 'Ilha Da Iguana', year: 2021, description: "'Ilha Da Iguana' é o terceiro álbum de originais de Iguana Garcia. Bloqueado geograficamente, o mar do artista lisboeta só podia ser um. Embarcou com uma tripulação de MIDIs piratas, a drum machine como primeiro imediata, poeta na linguagem dos 0s e 1s. O objectivo era encontrar as correntes do house e do techno, não abandonando a pop, e ver que lugar terá a língua de Camões em tais latitudes. A guitarra ficou em terra. São 10 cantigas que contam o naufrágio de 2020 e 2021 para a música de dança, de olhos posto em futuras pistas.", genre: 'Indie-House', catalog_number: 'DILP002', artist: iguana_garcia, photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg', artist_name: 'Iguana Garcia')

# Ilha Da Iguana - TRACKS
Track.create!(title: 'Ilha Da Iguana', tracks_number: 1, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249024/disco%20interno/mp3/ilha%20da%20iguana/01_IlhaDaIguana_j6frfo.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Monotonia', tracks_number: 2, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249015/disco%20interno/mp3/ilha%20da%20iguana/02_Monotonia_vgwsf8.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Tarraxo do Animal Doméstico', tracks_number: 3, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249017/disco%20interno/mp3/ilha%20da%20iguana/03_TarraxoDoAnimalDomestico_ldpjoo.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Sunset Drive', tracks_number: 4, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249016/disco%20interno/mp3/ilha%20da%20iguana/04_SunsetDrive_pbi8qu.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Saudades', tracks_number: 5, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249005/disco%20interno/mp3/ilha%20da%20iguana/05_Saudades_o1vvjy.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Dança da Lua', tracks_number: 6, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249025/disco%20interno/mp3/ilha%20da%20iguana/06_Dan%C3%A7aDaLua_cre8i4.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Fixação', tracks_number: 7, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249015/disco%20interno/mp3/ilha%20da%20iguana/07_Fixa%C3%A7%C3%A3o_t3mltr.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Matrix da Pátria', tracks_number: 8, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249013/disco%20interno/mp3/ilha%20da%20iguana/08_MatrixDaPatria_qhf0eo.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'A Gruta', tracks_number: 9, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249022/disco%20interno/mp3/ilha%20da%20iguana/09_AGruta_u8aika.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')
Track.create!(title: 'Bolero Digital', tracks_number: 10, artist: iguana_garcia, album: ilha_da_iguana, audio_url: 'https://res.cloudinary.com/doa9kh79y/video/upload/v1672249014/disco%20interno/mp3/ilha%20da%20iguana/10_BoleroDigital_uwwlnf.mp3', photo_url: 'https://res.cloudinary.com/doa9kh79y/image/upload/v1672250534/disco%20interno/covers/ilha%20da%20iguana/IlhaNew_1_nblqhx.jpg')

puts 'Done!'
