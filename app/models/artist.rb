class Artist < ApplicationRecord
  has_many :albums
  has_many :tracks

  has_one_attached :photo
end
