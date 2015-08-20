require 'sinatra'

class ThermostatController < Sinatra::Application

set :public_folder, proc { File.join(root) }
set :views, Proc.new { File.join(root, "views") }

  get '/' do
    erb :index
  end

  run! if app_file == $0
end