(function() {
  var Event, nwrug;
  Event = (function() {
    function Event(name) {
      this.name = name;
    }
    Event.prototype.welcome = function() {
      return alert("Welcome to " + this.name);
    };
    return Event;
  })();
  nwrug = new Event("NWRUG");
  nwrug.welcome();
}).call(this);
