class CreateVisitorInfos < ActiveRecord::Migration
  def change
    create_table :visitor_infos do |t|

      t.timestamps null: false
    end
  end
end
