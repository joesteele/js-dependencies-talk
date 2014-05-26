(function() {
  function Car(el) {
    this.$el = $(el);
    this.width = this.$el.width();

    this.speed = 50;

    this.$el.on('click', $.proxy(this.drive, this));
  }

  Car.baseDuration = 2000;
  Car.resetDelay = 1000;

  Car.prototype.drive = function() {
    var car = this;
    var duration = Car.baseDuration / car.speed * 100;
    car.$el.velocity({
      left: $('body').width() + car.width
    }, {
      duration: duration,
      complete: function() {
        setTimeout(function() {
          car.$el.css({left: 0});
        }, Car.resetDelay);
      }
    });
  }

  $.extend(Audi.prototype, Car.prototype);
  function Audi(el) {
    Car.call(this, el);
    this.speed = 125;
  }

  $.extend(BMW.prototype, Car.prototype);
  function BMW(el) {
    Car.call(this, el);
    this.speed = 150;
  }

  $.extend(Ferrari.prototype, Car.prototype);
  function Ferrari(el) {
    Car.call(this, el);
    this.speed = 200;
  }

  function Race(cars) {
    this.cars = cars;
    this.start = $.proxy(this.start, this);
  }

  Race.prototype.start = function() {
    $.each(this.cars, function(index, car) {
      car.drive();
    });
  }

  Race.init = function() {
    var cars = [];

    $('.car').each(function() {
      var el = $(this);
      if (el.hasClass('audi')) {
        cars.push(new Audi(this));
      } else if (el.hasClass('bmw')) {
        cars.push(new BMW(this));
      } else if (el.hasClass('ferrari')) {
        cars.push(new Ferrari(this));
      } else {
        cars.push(new Car(this));
      }
    });

    var race = new Race(cars);
    $('.race-btn').on('click', race.start);

    return race;
  }

  Race.init();
})();
