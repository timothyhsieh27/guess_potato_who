Rails.application.routes.draw do
  root 'users#new' # signup page; add button/link to login

  get '/leaderboard', to: 'pages#leaderboard'
  get 'game', to: 'games#new'

  post 'signup', to: 'users#create'
  post '/game', to: 'games#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :users
  resources :games
end
