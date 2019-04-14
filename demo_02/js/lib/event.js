var Dom = require('dom');
var g = Dom.g;
var Event = {
  on: function(id, type, fn) {
    var dom = g(id);
    dom['on' + type] = fn;
  }
};

module.exports = Event;
