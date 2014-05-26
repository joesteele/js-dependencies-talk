define(function() {
  return {
    baseUrl: '/examples/3',
    shim: {
      'jquery': {
        exports: ['$', 'jQuery']
      },
      'velocity': {
        deps: ['jquery']
      }
    },
    paths: {
      'jquery': '../js/jquery',
      'velocity': '../js/jquery.velocity'
    }
  }
});
