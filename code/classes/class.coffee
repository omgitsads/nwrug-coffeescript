class Event
  constructor: (@name) ->

  welcome: ->
    alert("Welcome to #{@name}")


nwrug = new Event "NWRUG"

nwrug.welcome() 
# Welcome to NWRUG
