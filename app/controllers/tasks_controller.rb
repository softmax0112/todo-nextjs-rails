class TasksController < ApplicationController
  before_action :authenticate_user

  def index
    render json: { tasks: current_user.tasks }
  end

  def create
    task  = Task.new(
              description:  params[:description],
              user:         current_user
            )
    if task.save
      render json: { task: task }
    else
      render json: { errors: task.errors.full_messages }, status: 400
    end
  end

  def destroy
    task = current_user.tasks.find(params[:id])
    task.destroy
    render json: { task: task }
  end

end
