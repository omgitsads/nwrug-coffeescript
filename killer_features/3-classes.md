<!SLIDE>

# Classes and Inheritence

<!SLIDE>

    @@@ruby
    class Event
      constructor: (@name) ->

      welcome: ->
        alert("Welcome to #{@name}")


    nwrug = new Event "NWRUG"
    nwrug.welcome() # => "Welcome to NWRUG"

<!SLIDE>

# CoffeeScript gives you super powers!

<!SLIDE small>

    @@@ruby
    class Event
      constructor: (@name) ->

      welcome: ->
        alert("Welcome to #{@name}");

    class Talk extends Event
      welcome: ->
        super
        alert("This one is a talk!");

    class Social extends Event
      welcome: ->
        super
        alert("This one is a pub meet!")

    coffeescript = new Talk "Coffeescript";
    curry = new Social "Wetherspoons"
