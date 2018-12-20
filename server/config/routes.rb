Rails.application.routes.draw do
  post    'sign_up'   => 'accounts#sign_up'
  post    'sign_in'   => 'accounts#sign_in'
  get     'tasks'     => 'tasks#index'
  post    'tasks'     => 'tasks#create'
  delete  'tasks/:id' => 'tasks#destroy'
  patch   'tasks/:id' => 'tasks#update'
end
