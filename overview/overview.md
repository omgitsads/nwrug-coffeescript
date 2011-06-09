<!SLIDE bullets incremental>

# What is CoffeeScript?

<!SLIDE>

## A little language that compiles to Javascript

<!SLIDE>

## Exposes the 'Good Parts' of Javascript

<!SLIDE>

## Output passes JSLint, pretty printed and generally very readable

<!SLIDE>

## "It's Just Javascript"

<!SLIDE>

## Used by 37Signals, Github and more!

<!SLIDE bullets incremental>

# Default in Rails 3.1
* So you have to learn it!
* (except not really.)

<!SLIDE>

# Example Code #

    @@@ Ruby
    class Shortner
      create: (url, callback) ->
          client.get "url:#{url}", (err, code) =>
            if code?
              callback code
            else
              @encode url, callback
