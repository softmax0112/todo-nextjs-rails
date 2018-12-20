class ApplicationController < ActionController::API

  private

  def current_user
    @current_user ||= User.find_by_token(params[:token])
  end

  def authenticate_user
    unless current_user
      return render json: { errors: ["Invalid token"] }, status: 401
    end
  end
end
