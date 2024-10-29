require 'rails_helper'

RSpec.describe 'Examples', type: :request do
  describe 'GET /examples' do
    it 'returns a successful response' do
      get '/examples'
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)).to eq({ 'message' => 'Hello, world!' })
    end
  end
end
