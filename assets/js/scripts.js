// preloader script
/*global $*/
var today = new Date();


(function() {
  $(document).ready(function() {
    $('body').fadeIn(1500).addClass('show');
    $('#year').html(today.getFullYear());
  });

  $(window).on('scroll', () => {
    var $nav = $('.navbar2');

    if($(window).scrollTop() > 250 ) {
      $nav.fadeIn($(window).scrollTop() - 100)
    }
    else {
      $nav.fadeOut($(window).scrollTop() - 100)
    }
  })

})();
