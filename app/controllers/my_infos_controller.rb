class MyInfosController < ApplicationController
  def show
    @your_infos = VisitorInfo.all
  end

  def index
  end
end
