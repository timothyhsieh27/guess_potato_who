#
class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.integer :score, index: true

      t.timestamps
    end
  end
end
