class AddEmailToVisitorInfo < ActiveRecord::Migration
  def change
    add_column :visitor_infos, :email, :string
  end
end
