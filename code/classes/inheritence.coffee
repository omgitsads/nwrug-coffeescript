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
