(function() {
  var Car = require('./car');

  $.extend(BMW.prototype, Car.prototype);

  function BMW(el) {
    Car.call(this, el);
    this.$el.addClass('bmw');
    this.speed = 140;
  }

  module.exports = BMW;
})();
