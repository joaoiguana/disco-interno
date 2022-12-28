class AddTracksNumberToTracks < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :tracks_number, :integer
  end
end
