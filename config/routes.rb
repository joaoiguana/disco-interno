require "trestle/engine"

Rails.application.routes.draw do
  resources :artists
  resources :albums
  resources :tracks

  namespace :admin do
    mount Trestle::Engine => "/"

    get "/albums_admin/new", to: "trestle/albums_admin#new", as: :new_albums_admin
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
