(function() {
  var announce, languages;
  var __slice = Array.prototype.slice;
  languages = ['Ruby', 'JavaScript', 'Objective-C', 'Java'];
  announce = function() {
    var fav, like, nolike, _i;
    fav = arguments[0], like = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), nolike = arguments[_i++];
    console.log("I Love " + fav);
    console.log("I Like " + like);
    return console.log("I'm not very fond of " + nolike);
  };
  announce.apply(null, languages);
}).call(this);
