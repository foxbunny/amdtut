define([], function() {
  var template = {};

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
      t = t.replace(new RegExp('\\$' + key, 'g'), d[key]);
    }

    // Return 'rendered' template
    return t;
  };

  return template;
});
