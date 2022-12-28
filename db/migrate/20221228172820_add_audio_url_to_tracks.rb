class AddAudioUrlToTracks < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :audio_url, :string
  end
end
