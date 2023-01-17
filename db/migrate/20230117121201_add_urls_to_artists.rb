class AddUrlsToArtists < ActiveRecord::Migration[7.0]
  def change
    add_column :artists, :spotify_url, :string
    add_column :artists, :bandcamp_url, :string
    add_column :artists, :soundcloud_url, :string
    add_column :artists, :instagram_url, :string
    add_column :artists, :cover_url, :string
    add_column :artists, :press, :string
  end
end
