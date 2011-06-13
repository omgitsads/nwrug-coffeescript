(function() {
  var Event, Social, Talk, coffeescript, curry;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Event = (function() {
    function Event() {}
    return Event;
  })();
  ({
    constructor: function(name) {
      this.name = name;
    },
    welcome: function() {
      return alert("Welcome to " + this.name);
    }
  });
  Talk = (function() {
    function Talk() {
      Talk.__super__.constructor.apply(this, arguments);
    }
    __extends(Talk, Event);
    Talk.prototype.welcome = function() {
      Talk.__super__.welcome.apply(this, arguments);
      return alert("This one is a talk!");
    };
    return Talk;
  })();
  Social = (function() {
    function Social() {
      Social.__super__.constructor.apply(this, arguments);
    }
    __extends(Social, Event);
    Social.prototype.welcome = function() {
      Social.__super__.welcome.apply(this, arguments);
      return alert("This one is a pub meet!");
    };
    return Social;
  })();
  coffeescript = new Talk("Introduction to Coffeescript");
  coffeescript.welcome();
  curry = new Social("Wetherspoons");
  curry.welcome();
}).call(this);
