# frozen_string_literal: true

class ExamplesController < ApplicationController
  def index
    render json: { message: 'Hello, world!' }
  end
end
