class Track < ApplicationRecord
  belongs_to :artist
  belongs_to :album

  has_one_attached :audio
end
