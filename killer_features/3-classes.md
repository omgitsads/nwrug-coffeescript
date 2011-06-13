<!SLIDE>

# Classes and Inheritence

<!SLIDE>

    @@@ruby
    class Event
      constructor: (@name) ->

      welcome: ->
        alert("Welcome to #{@name}")


    nwrug = new Event "NWRUG"

    nwrug.welcome() 
    # Welcome to NWRUG

<!SLIDE>

    @@@javascript
    (function() {
      var Event, nwrug;
      Event = (function() {
        function Event(name) {
          this.name = name;
        }
        Event.prototype.welcome = function() {
          return alert("Welcome to " + this.name);
        };
        return Event;
      })();
      nwrug = new Event("NWRUG");
      nwrug.welcome();
    }).call(this);

<!SLIDE>

# CoffeeScript gives you super powers!

<!SLIDE smaller>

    @@@ruby
    class Event
      constructor: (@name) ->

      welcome: ->
        alert("Welcome to #{@name}")

    class Talk extends Event
      welcome: ->
        super
        alert("This one is a talk!")

    class Social extends Event
      welcome: ->
        super
        alert("This one is a pub meet!")

    coffeescript = new Talk "Introduction to Coffeescript"
    coffeescript.welcome()
    # Welcome to Introduction to CoffeeScript
    # This one is a talk!

    curry = new Social "Wetherspoons"
    curry.welcome()
    # Welcome to Wetherspoons
    # This one is a pub meet!

<!SLIDE smaller>

    @@@javascript
      // ...
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
      // ...


