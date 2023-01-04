class AddArtistNameToAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :artist_name, :string
  end
end
