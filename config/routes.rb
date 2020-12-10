Rails.application.routes.draw do
  get 'patients/index'
  get 'patients/show'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :patient, only: %i[index show]
end
