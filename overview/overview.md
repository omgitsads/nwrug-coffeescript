<!SLIDE bullets incremental>

# What is CoffeeScript?

<!SLIDE>

## A little language that compiles to Javascript

<!SLIDE>

## Exposes the 'Good Parts' of Javascript

<!SLIDE>

## Output passes through JSLint without warnings

<!SLIDE>

## "It's Just Javascript"

<!SLIDE bullets incremental>

# Default in Rails 3.1
* So you have to learn it!
* (except not really.)

<!SLIDE>

# Example Code #

    @@@ Ruby
    create: (url, callback) ->
        client.get "url:#{url}", (err, code) =>
          if code?
            callback code
          else
            @encode url, callback
    
