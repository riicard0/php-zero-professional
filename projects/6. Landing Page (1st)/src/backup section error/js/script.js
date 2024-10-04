// MOBILE MENU
$(document).ready(function () {
  $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });
});

// INCLUDE CONTENT - HTML SECTIONS
$(document).ready(function () {
  $('#includeContent_header').load("header.html");
  $('#includeContent_home').load("home.html");
  $('#includeContent_menu').load("menu.html");
  $('#includeContent_testimonials').load("testimonials.html");
  $('#includeContent_footer').load("footer.html");
});