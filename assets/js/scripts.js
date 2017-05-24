// preloader script
/*global $*/
(function() {
  $(document).ready(function() {
    var today = new Date();
    $('body').fadeIn(1500).addClass('show');
    $('#year').html(today.getFullYear());
  });

  $(window).on('scroll', () => {
    var $navScroll = $('.navbarScroll');

    if($(window).scrollTop() >= 250 ) {
      $navScroll.fadeIn($(window).scrollTop() + 100)

    }
    else {
      $navScroll.fadeOut($(window).scrollTop() - 150)
    }
  })

  var $label = $(".LabelName")
  
  $(".project").hover(function() {
    $label.fadeIn(500);
    $label.fadeOut(500);
  })

})();
