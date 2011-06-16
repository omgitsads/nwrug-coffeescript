(function() {
  var changeNumbers, fun, inner, outer;
  outer = 1;
  changeNumbers = function() {
    var inner;
    inner = -1;
    return outer = 10;
  };
  inner = changeNumbers();
  fun = function() {
    if (1 + 1 === 2) {
      return "1+1 == true";
    } else {
      return "1+1 != 2";
    }
  };
}).call(this);
