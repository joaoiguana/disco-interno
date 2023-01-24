class AddArtistsNameToTracks < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :artist_name, :string
  end
end
