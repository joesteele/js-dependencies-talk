class Example
  ROOT = File.dirname(__FILE__)

  def call(env)
    req = Rack::Request.new(env)
    index = File.join(ROOT, req.path_info, 'index.html')
    if File.exists?(index)
      req.path_info += 'index.html'
    end
    Rack::Directory.new(ROOT).call(env)
  end
end
