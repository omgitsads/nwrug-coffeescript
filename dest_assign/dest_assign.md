<!SLIDE>

# Destructuring Assignment

<!SLIDE small>

    @@@ruby
    weatherReport = (location) ->
      # Make an Ajax request to fetch the weather...
      [location, 18, "Mostly Sunny"]

    [city, temp, forecast] = weatherReport "Manchester, GB"

    tag = "<impossible>"
    [open, contents..., close] = tag.split("")

<!SLIDE smaller>

    @@@ruby
    event =
      group: "NWRUG"
      talk:
        title: "Introduction To CoffeeScript"
        speaker: "Adam Holt"
      venue:
        name: "MadLab"
        address: ["36-40 Edge Street", "Manchester"]
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

    alert "#{group}: #{title} by #{speaker} at #{name}"
    # NWRUG: Introduction To CoffeeScript by Adam Holt at MadLab

<!SLIDE smaller>

    @@@ruby
    event =
      group: "NWRUG"
      talk:
        title: "Introduction To CoffeeScript"
        speaker: "Adam Holt"
      venue:
        name: "MadLab"
        address: ["36-40 Edge Street", "Manchester"]
        postcode: "M41HN"

    {group, talk: {title, speaker}, venue: {name}} = event

    alert "#{group}: #{title} by #{speaker} at #{name}"
    # NWRUG: Introduction To CoffeeScript by Adam Holt at MadLab
