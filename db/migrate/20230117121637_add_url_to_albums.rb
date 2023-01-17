class AddUrlToAlbums < ActiveRecord::Migration[7.0]
  def change
    add_column :albums, :bandcamp_url, :string
  end
end
