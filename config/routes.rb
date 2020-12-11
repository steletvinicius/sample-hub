Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :patients, only: %i[index show]

  resources :doctors, only: %i[new create edit update]


  resources :samples, only: %i[index new create edit update]

  resources :batches, only: [:index, :show, :create, :update]

  resources :exams, only: %i[new create]
  resources :procedures, only: %i[index create new edit delete]

end
