Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: 'pages#home'
  get 'about_us', to: 'pages#about_us', as: :about_us

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :patients, only: %i[index show new create]

  resources :doctors, only: %i[new create edit update index]

  resources :samples, only: %i[index new create edit update show]

  resources :batches, only: %i[index create edit update destroy]

  resources :exams, only: %i[new create]

  resources :procedures, only: %i[index create new edit delete]

  resources :families, only: %i[new create]
end
