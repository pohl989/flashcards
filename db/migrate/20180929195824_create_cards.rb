class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer
      t.boolean :is_correct, default: false

      t.timestamps
    end
  end
end
