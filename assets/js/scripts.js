// preloader script 
/*global $*/
var today = new Date();


(function() {
  $(document).ready(function() {
    $('body').fadeIn(1500).addClass('show');
    
    $('#year').html(today.getFullYear());
  });
  
})();

console.log($('.navbar-default').height())