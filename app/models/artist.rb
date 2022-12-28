class Artist < ApplicationRecord
  has_many :albums
  has_many :tracks

  has_many_attached :photos
end
