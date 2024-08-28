$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true, 
    autoplayTimeout:3000,
    smartSpeed: 1000,
    autoplayHoverPause:true
   });

   $('.menu-burger').on('click', function(){
      $('.burger-list').slideToggle();
      $('.owl-carousel').css('z-index', '-1');
   });

   $('.slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
        }] 
   });   

    $('.menu_link').on('click', function (event) {
      event.preventDefault();
      let id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });

  $(".news-block__text-1").mouseover(function() {
    $(".news-block__title-1").css("text-decoration", "underline");
    $(this).css("text-decoration", "underline");
    if ($(window).width() <= '991') {
      $(".news-block__title-1").css("text-decoration", "none");
      $(this).css("text-decoration", "none");
    }
  });
  $(".news-block__text-1").mouseleave(function() {
    $(".news-block__title-1").css("text-decoration", "none");
    $(this).css("text-decoration", "none");
  });

  $(".news-block__text-2").mouseover(function() {
    $(".news-block__title-2").css("text-decoration", "underline");
    $(this).css("text-decoration", "underline");
    if ($(window).width() <= '991') {
      $(".news-block__title-2").css("text-decoration", "none");
      $(this).css("text-decoration", "none");
    }
  });
  $(".news-block__text-2").mouseleave(function() {
    $(".news-block__title-2").css("text-decoration", "none");
    $(this).css("text-decoration", "none");
  });

  $(".news-block__text-3").mouseover(function() {
    $(".news-block__title-3").css("text-decoration", "underline");
    $(this).css("text-decoration", "underline");
    if ($(window).width() <= '991') {
      $(".news-block__title-3").css("text-decoration", "none");
      $(this).css("text-decoration", "none");
    }
  });
  $(".news-block__text-3").mouseleave(function() {
    $(".news-block__title-3").css("text-decoration", "none");
    $(this).css("text-decoration", "none");
  });

});
