(function($) {
  $('.restart-demo-server').on('click', function(e) {
    $.post('/runner/restart', function(data) {
      _.delay(showDemo, 1000, data);
    });
    e.preventDefault();
  });

  $('.demo-tag-selector').on('change', function(e) {
    $.post('/runner/checkout', {tag: $(this).val()}, function(data) {
      _.delay(showDemo, 1000, data);
    });
  });

  function showDemo(port) {
    var src = 'http://'+location.hostname+':'+port+';
    $iframe = $("<iframe width=600 height=400 src='"+src+"'></iframe>")
    $('.demo-container').html($iframe)
  };
})(jQuery);
