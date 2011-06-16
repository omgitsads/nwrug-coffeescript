weatherReport = (location) ->
  # Make an Ajax request to fetch the weather...
  [location, 18, "Mostly Sunny"]

[city, temp, forecast] = weatherReport "Manchester, GB"

tag = "<impossible>"

[open, contents..., close] = tag.split("")

event =
  group: "NWRUG"
  talk:
    title: "Introduction To CoffeeScript"
    speaker: "Adam Holt"
  venue:
    name: "MadLab"
    address: ["36-40 Edge Street",
      "Manchester"]
    postcode: "M41HN"

{
  group: group,
  talk: {
    title: title,
    speaker: speaker
  },
  venue: {
    name: name
  }
} = event

console.log "#{group}: #{title} by #{speaker} at #{name}"

{group, talk: {title, speaker}, venue: {name}} = event

console.log "#{group}: #{title} by #{speaker} at #{name}"
