Rails.application.routes.draw do
  root 'home#index'
  
  namespace :api do
    get 'greetings/index'
  end
  
  # Define your other application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # For example:
  # get 'articles/index'

  # Defines the root path route ("/")
  # root "articles#index"
end
