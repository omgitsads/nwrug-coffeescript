(function() {
  var event, group, name, speaker, title, _ref, _ref2;
  event = {
    group: "NWRUG",
    talk: {
      title: "Introduction To CoffeeScript",
      speaker: "Adam Holt"
    },
    venue: {
      name: "MadLab",
      address: ["36-40 Edge Street", "Manchester"],
      postcode: "M41HN"
    }
  };
  group = event.group, _ref = event.talk, title = _ref.title, speaker = _ref.speaker, name = event.venue.name;
  console.log("" + group + ": " + title + " by " + speaker + " at " + name);
  group = event.group, _ref2 = event.talk, title = _ref2.title, speaker = _ref2.speaker, name = event.venue.name;
  console.log("" + group + ": " + title + " by " + speaker + " at " + name);
}).call(this);
