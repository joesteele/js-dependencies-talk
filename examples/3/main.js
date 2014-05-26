require(['config'], function(config) {
  require.config(config);

  require(['jquery', 'velocity'], function() {
    require(['models/race'], function(Race) {
      Race.init();
    });
  });
});
