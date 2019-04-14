var Dom = require('../lib/dom');
var Event = require('../lib/event');

Event.on('btn', 'click', function() {
  Dom.css('layer', 'display', 'block');
});

Event.on('close', 'click', function() {
  Dom.css('layer', 'display', 'none');
});
