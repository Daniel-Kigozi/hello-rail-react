class Api::GreetingsController < ApplicationController
  def index
    greeting = Message.order('RANDOM()').first
    render json: { greeting: greeting.text }
  end
end
