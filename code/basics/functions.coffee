square  = (x) -> x * x
cube    = (x) -> square(x) * x

sayHello = (name) ->
  alert("Hello, #{name}")

fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}.."
