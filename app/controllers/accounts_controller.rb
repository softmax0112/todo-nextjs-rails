class AccountsController < ApplicationController

  def sign_up
    user  = User.new(
              username:               params[:username],
              password:               params[:password],
              password_confirmation:  params[:password_confirmation]
            )
    if user.save
      render json: { token: user.token }
    else
      render json: { errors: user.errors.full_messages }, status: 400
    end
  end

  def sign_in
    user  = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      render json: { token: user.token }
    else
      render json: { errors: ["Invalid credentials"] }, status: 400
    end
  end
end
