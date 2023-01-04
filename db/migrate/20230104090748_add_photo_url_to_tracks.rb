class AddPhotoUrlToTracks < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :photo_url, :string
  end
end
