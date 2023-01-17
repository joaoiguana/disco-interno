class AddYoutubeUrlToArtists < ActiveRecord::Migration[7.0]
  def change
    add_column :artists, :youtube_url, :string
  end
end
