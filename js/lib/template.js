define([], function() {
  var template = {};

  // Build regular expression
  function keyRe(key) {
    return new RegExp('\\$' + key, 'g');
  }

  /**
   * Render template
   * 
   * @param {String} t Template
   * @param {Object} d Data
   * @return {String} Rendered template
   */
  template.render = function(t, d) {
    // For each key in `d`, subsitute key in template with value
    for (key in d) {
      // We'll use '$key' format for placeholders in our template
      t = t.replace(keyRe(key), d[key]);
    }

    // Return 'rendered' template
    return t;
  };

  return template;
});
