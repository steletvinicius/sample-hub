Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :procedures, only: %i[index create new edit delete]

  resources :patients, only: %i[index show]

  resources :exams, only: %i[new create]

  resources :doctors, only: %i[new create edit update]

end
