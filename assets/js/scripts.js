// preloader script

$(document).ready(() => {
  $('body').fadeIn(1500).addClass('show')
})

var today = new Date();
document.getElementById('currentYear').innerHTML = today.getFullYear()