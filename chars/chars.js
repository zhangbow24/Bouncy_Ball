// Character registry — shared by select.html and index.html
window.CHARACTERS = [];
window.getCharById = function(id) {
  return window.CHARACTERS.find(function(c) { return c.id === id; }) || window.CHARACTERS[0];
};
