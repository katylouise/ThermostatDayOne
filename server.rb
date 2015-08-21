require 'sinatra'
require 'json'

class ThermostatController < Sinatra::Application
enable :sessions
set :session_secret, "secret"

set :public_folder, proc { File.join(root) }
set :views, Proc.new { File.join(root, "views") }

  get '/' do
    erb :index
  end

  get '/temperature' do
    temp = {temp: session[:temperature]}
    JSON.generate(temp)
  end

  post '/temperature' do
    session[:temperature] = params[:temp]
  end

  run! if app_file == $0
end