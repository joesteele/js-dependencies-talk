require 'rack'
require './examples/example'
require './slides/slides'

app = Rack::Builder.new do
  map '/examples' do
    puts "GOT ROUTE"
    run Example.new
  end

  map '/' do
    run Slides.new
  end
end.to_app

run app
