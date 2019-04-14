var Dom = {
  g: function(id) {
    return document.getElementById(id);
  },
  css: function(id, key, value) {
    var dom = this.g(id);
    if (typeof key === 'string') {
      dom.style[key] = value;
    } else {
      for (var i in key) {
        dom.style[i] = key[i];
      }
    }
  }
};
module.exports = Dom;
