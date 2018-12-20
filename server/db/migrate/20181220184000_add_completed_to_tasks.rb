class AddCompletedToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :completed, :boolean, null: false, default: false
  end
end
