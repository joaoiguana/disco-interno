class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title
      t.integer :year
      t.text :description
      t.string :genre
      t.string :catalog_number
      t.references :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
