require(
  [
    'jquery', 
    'lib/template', 
    'text!templates/main.tpl'
  ], function(
    $, 
    template, 
    tMain
  ) {

  $(document).ready(function() { 
    $('body').append(template.render(tMain, {time: new Date()}));
  });

});
