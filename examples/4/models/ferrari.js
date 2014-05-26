(function() {
  var Car = require('./car');

  $.extend(Ferrari.prototype, Car.prototype);

  function Ferrari(el) {
    Car.call(this, el);
    this.$el.addClass('ferrari');
    this.speed = 200;
  }

  module.exports = Ferrari;
})();
