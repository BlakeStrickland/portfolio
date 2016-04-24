class AddNameToVisitorInfo < ActiveRecord::Migration
  def change
    add_column :visitor_infos, :name, :string
  end
end
