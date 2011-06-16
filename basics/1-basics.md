<!SLIDE>

# Basics

<!SLIDE>

    @@@ruby
    hello = "World"
    number = 1
    countries = ["UK", "Germany", "USA"]

    if happy and knowsIt
      clapsHands()
      chaChaCha()
    else
      showIt()

    gottaGetDown() if friday

<!SLIDE>

    @@@ruby
    event =
      name: "NWRUG"
      talk:
        title: "Introduction To CoffeeScript"
        speaker: "Adam Holt"
      venue:
        name: "MadLab"
        address: ["36-40 Edge Street", 
          "Manchester"]
        postcode: "M4 1HN"

<!SLIDE>

    @@@ruby
    square  = (x) -> x * x
    cube    = (x) -> square(x) * x

    sayHello = (name) ->
      alert("Hello, #{name}")

    fill = (container, liquid = "coffee") ->
      "Filling the #{container} with #{liquid}.."
