// Generated by CoffeeScript 1.8.0
(function() {
  var Account, Animal, Horse, OPERATOR, Person, Snake, afunc, age, ages, author, awardMedals, bitlist, changeNumbers, child, cholesterol, city, close, contenders, contents, copy, countdown, courses, cube, date, dish, eldest, end, error, evens, filename, fill, first, food, foods, footprints, forecast, futurists, gold, grade, healthy, hi, html, i, inner, kids, last, lyrics, middle, mobyDick, mood, name, num, numbers, open, outer, quote, rest, sam, say, score, sentence, silver, singers, solipsism, song, speed, square, start, street, tag, temp, text, theBait, theSwitch, tim, tom, volume, weatherReport, winner, x, yearsOld, zip, _fn, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  say = function() {
    return "Say what ?";
  };

  square = function(x) {
    return x * x;
  };

  cube = function(x) {
    return square(x) * x;
  };

  fill = function(container, liquid) {
    if (liquid == null) {
      liquid = "coffee";
    }
    return "Filling the " + container + " with " + liquid + "...";
  };

  song = ["do", "re", "mi", "fa", "so"];

  singers = {
    Jagger: "Rock",
    Elvis: "Roll"
  };

  bitlist = [1, 0, 1];

  kids = {
    brother: {
      name: "Max",
      age: 11
    },
    sister: {
      name: "Tda",
      age: 9
    }
  };

  $('.account').attr({
    "class": 'active'
  });

  log(object["class"]);

  outer = 1;

  changeNumbers = function() {
    var inner;
    inner = -1;
    return outer = 10;
  };

  inner = changeNumbers();

  if (singing) {
    mood = greatlyImproved;
  }

  if (happy && knowsIt) {
    clapsHands();
    chaChaCha();
  } else {
    showIt();
  }

  date = friday ? sue : jill;

  gold = silver = rest = "unknown";

  awardMedals = function() {
    var first, others, second;
    first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    gold = first;
    silver = second;
    return rest = others;
  };

  contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Felix", "Shawn Johnson", "Roman Sebrle", "Guo Jingjing", "Tyson Gay", "Asafa Powell", "Usain Bolt"];

  awardMedals.apply(null, contenders);

  alert("Gold: " + gold);

  alert("Silver: " + silver);

  alert("The Field: " + rest);

  _ref = ['toast', 'cheese', 'wine'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    food = _ref[_i];
    eat(food);
  }

  courses = ['greens', 'caviar', 'truffles'];

  for (i = _j = 0, _len1 = courses.length; _j < _len1; i = ++_j) {
    dish = courses[i];
    menu(i + 1, dish);
  }

  foods = ['broccoli', 'spinach', 'chocolate'];

  for (_k = 0, _len2 = foods.length; _k < _len2; _k++) {
    food = foods[_k];
    if (food !== 'chocolate') {
      eat(food);
    }
  }

  countdown = (function() {
    var _l, _results;
    _results = [];
    for (num = _l = 10; _l >= 1; num = --_l) {
      _results.push(num);
    }
    return _results;
  })();

  evens = (function() {
    var _l, _results;
    _results = [];
    for (x = _l = 0; _l <= 10; x = _l += 2) {
      _results.push(x);
    }
    return _results;
  })();

  yearsOld = {
    max: 10,
    ida: 9,
    tim: 11
  };

  ages = (function() {
    var _results;
    _results = [];
    for (child in yearsOld) {
      age = yearsOld[child];
      _results.push("" + child + " is " + age);
    }
    return _results;
  })();

  if (this.studyingEconomics) {
    while (supply > demand) {
      buy();
    }
    while (!(supply > demand)) {
      sell();
    }
  }

  num = 6;

  lyrics = (function() {
    var _results;
    _results = [];
    while (num -= 1) {
      _results.push("" + num + " little monkeys, jumping on the bed. One fell out and bumped his head.");
    }
    return _results;
  })();

  _fn = function(filename) {
    return fs.readFile(filename, function(err, contents) {
      return compile(filename, contents.toString());
    });
  };
  for (_l = 0, _len3 = list.length; _l < _len3; _l++) {
    filename = list[_l];
    _fn(filename);
  }

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  start = numbers.slice(0, 3);

  middle = numbers.slice(3, -2);

  end = numbers.slice(-2);

  copy = numbers.slice(0);

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  [].splice.apply(numbers, [3, 4].concat(_ref1 = [-3, -4, -5, -6])), _ref1;

  grade = function(student) {
    if (student.excellentWork) {
      return "A+";
    } else if (student.okayStuff) {
      if (student.triedHard) {
        return "B";
      } else {
        return "B-";
      }
    } else {
      return "C";
    }
  };

  eldest = 24 > 21 ? "Liz" : "Ike";

  if (ignition === true) {
    launch();
  }

  if (band !== SpinalTap) {
    volume = 10;
  }

  if (answer !== false) {
    letTheWildRumpusBegin();
  }

  if (car.speed < limit) {
    accelerate();
  }

  if (pick === 47 || pick === 92 || pick === 13) {
    winner = true;
  }

  print(inspect("My name is " + this.name));

  if ((typeof mind !== "undefined" && mind !== null) && (typeof world === "undefined" || world === null)) {
    solipsism = true;
  }

  speed = 0;

  if (speed == null) {
    speed = 15;
  }

  footprints = typeof yeti !== "undefined" && yeti !== null ? yeti : "bear";

  zip = typeof lottery.drawWinner === "function" ? (_ref2 = lottery.drawWinner().address) != null ? _ref2.zipcode : void 0 : void 0;

  Animal = (function() {
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.move = function(meters) {
      return alert(this.name + (" moved " + meters + "m."));
    };

    return Animal;

  })();

  Snake = (function(_super) {
    __extends(Snake, _super);

    function Snake() {
      return Snake.__super__.constructor.apply(this, arguments);
    }

    Snake.prototype.move = function() {
      alert("Slithering...");
      return Snake.__super__.move.call(this, 5);
    };

    return Snake;

  })(Animal);

  Horse = (function(_super) {
    __extends(Horse, _super);

    function Horse() {
      return Horse.__super__.constructor.apply(this, arguments);
    }

    Horse.prototype.move = function() {
      alert("Galloping...");
      return Horse.__super__.move.call(this, 45);
    };

    return Horse;

  })(Animal);

  sam = new Snake("Sammy the Python");

  tom = new Horse("Tommy the Palomino");

  sam.move();

  tom.move();

  String.prototype.dasherize = function() {
    return this.replace(/_/g, "-");
  };

  theBait = 1000;

  theSwitch = 0;

  _ref3 = [theSwitch, theBait], theBait = _ref3[0], theSwitch = _ref3[1];

  weatherReport = function(location) {
    return [location, 72, "Mostly Sunny"];
  };

  _ref4 = weatherReport("Berkeley, CA"), city = _ref4[0], temp = _ref4[1], forecast = _ref4[2];

  futurists = {
    sculptor: "Umberto Boccioni",
    painter: "Vladimir Burliuk",
    poet: {
      name: "F.T. Marinetti",
      address: ["Via Roma 42R", "Bellagio, Italy 22021"]
    }
  };

  _ref5 = futurists.poet, name = _ref5.name, (_ref6 = _ref5.address, street = _ref6[0], city = _ref6[1]);

  tag = "<impossible>";

  _ref7 = tag.split(""), open = _ref7[0], contents = 3 <= _ref7.length ? __slice.call(_ref7, 1, _m = _ref7.length - 1) : (_m = 1, []), close = _ref7[_m++];

  text = "Every literary critic believes he will outwit history and have the last word";

  _ref8 = text.split(" "), first = _ref8[0], last = _ref8[_ref8.length - 1];

  Person = (function() {
    function Person(options) {
      this.name = options.name, this.age = options.age, this.height = options.height;
    }

    return Person;

  })();

  tim = new Person({
    age: 4
  });

  Account = function(customer, cart) {
    this.customer = customer;
    this.cart = cart;
    return $('.shopping_cart').bind('click', (function(_this) {
      return function(event) {
        return _this.customer.purchase(_this.cart);
      };
    })(this));
  };

  hi = function() {
  return [document.title, "Hello JavaScript"].join(": ");
};

  switch (day) {
    case "Mon":
      go(work);
      break;
    case "Tue":
      go(relax);
      break;
    case "Thu":
      go(iceFishing);
      break;
    case "Fri":
    case "Sat":
      if (day === bingoDay) {
        go(bingo);
        go(dancing);
      }
      break;
    case "Sun":
      go(church);
      break;
    default:
      go(work);
  }

  score = 76;

  grade = (function() {
    switch (false) {
      case !(score < 60):
        return 'F';
      case !(score < 70):
        return 'D';
      case !(score < 80):
        return 'C';
      case !(score < 90):
        return 'B';
      default:
        return 'A';
    }
  })();

  try {
    allHellBreaksLoose();
    catsAndDogsLivingTogether();
  } catch (_error) {
    error = _error;
    print(error);
  } finally {
    cleanUp();
  }

  cholesterol = 127;

  healthy = (200 > cholesterol && cholesterol > 60);

  author = "Wittgenstein";

  quote = "A picture is a fact. -- " + author;

  sentence = "" + (22 / 7) + " is a decent approximation of π";

  mobyDick = "Call me Ishmael. Some years ago -- never mind how long precisely -- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world...";

  html = "<strong>\n  cup of coffeescript\n</strong>";


  /*
  SkinnyMochaHalfCaffScript Compiler v1.0
  Released under the MIT License
   */

  OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/;

  afunc = (function() {
    var a, c;
    a = 13;
    return c = "" + a + " is not good.";
  })();

}).call(this);
