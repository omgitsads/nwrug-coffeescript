(function() {
  var cube, fill, sayHello, square;
  square = function(x) {
    return x * x;
  };
  cube = function(x) {
    return square(x) * x;
  };
  sayHello = function(name) {
    return alert("Hello, " + name);
  };
  fill = function(container, liquid) {
    if (liquid == null) {
      liquid = "coffee";
    }
    return "Filling the " + container + " with " + liquid + "..";
  };
}).call(this);
