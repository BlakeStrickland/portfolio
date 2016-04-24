class VisitorInfosController < ApplicationController
  before_action :set_vinfo, only: [:show]

  def new
    @vistor_info = VisitorInfo.new
  end

  def show
    redirect_to my_info_path
  end

  def create
    @vistor_info = VisitorInfo.create!(vinfo_params)
    redirect_to @vistor_info
  end

  def index
  end

  private
  def set_vinfo
    @vistor_info = VisitorInfo.find(params[:id])
  end

  def vinfo_params
    params.require(:visitor_info).permit(:name, :email)
  end
end
