Rails.application.routes.draw do
  #proc or Lambda - proc(edure) that is run whenever the function matches a (request) that {isNOT a request in an HTML FORMAT}
  resources :dvds, constraints: ->(request){!request.format.html?}
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#protected', constraints: ->(request){
    request.format.html? }
  root to: 'pages#unprotected'
end
