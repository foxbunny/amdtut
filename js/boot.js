require(['jquery', 'lib/template'], function($, template) {
  $(document).ready(function() { 
    var tHithere = "Hi there. It's now $time";
    $('body').append(template.render(tHithere, {time: new Date()}));
  });
});
