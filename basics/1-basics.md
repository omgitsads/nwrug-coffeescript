<!SLIDE>

# Basics

<!SLIDE>

# Assignment

<!SLIDE small>

    @@@ruby
    # CoffeeScript

    hello = "World"
    one   = 1
    countries = ["UK", "Germany", "USA"]
    event = {name: "NWRUG", topic: "CoffeeScript"}

    kids =
      brother:
        name: "Max"
        age: 11
      sister:
        name: "Ida"
        age: 9

<!SLIDE small>

    @@@javascript
    // Javascript

    var hello, one, countries, event, kids;

    hello = "World";
    one   = 1;
    countries = ["UK", "Germany", "USA"];
    event = {
      name: "NWRUG",
      topic: "CoffeeScript"
    };

    kids = {
      brother: {
        name: "Max",
        age:  11
      },
      sister: {
        name: "Ida",
        age: 9
      }
    };

<!SLIDE>

# Functions

<!SLIDE>

    @@@javascript
    // Javascript

    var cube, square;

    square = function(x) {
      return x * x;
    };
    cube = function(x) {
      return square(x) * x;
    };

<!SLIDE>

    @@@ruby
    # CoffeeScript

    square  = (x) -> x * x
    cube    = (x) -> square(x) * x
