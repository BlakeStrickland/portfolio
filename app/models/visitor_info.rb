class VisitorInfo < ActiveRecord::Base
  validates :name, presence: true
  validates :email, presence: true
end
