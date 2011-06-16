<!SLIDE>

# Variable Scoping #

<!SLIDE>

    @@@ruby
    outer = 1
    changeNumbers = ->
      inner = -1
      outer = 10
    inner = changeNumbers()

<!SLIDE>

    @@@javascript
    var changeNumbers, inner, outer;
    outer = 1;
    changeNumbers = function() {
      var inner;
      inner = -1;
      return outer = 10;
    };
    inner = changeNumbers();

<!SLIDE>

# Never forget a var again!

<!SLIDE>

# BTW

<!SLIDE>

# Everything is an expression
### Implicit returns

<!SLIDE bullets incremental>

# No global variables
* Code wrapped in an anonymous function
* Use: `window.myVariable = Variable`;
