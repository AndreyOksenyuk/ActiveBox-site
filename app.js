$(function() {

/*Fixed header*/
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll load", function(){
    scrollPos = $(this).scrollTop();

     if ( scrollPos > introH ) {
     	header.addClass("fixed");
     } else{
     	header.removeClass("fixed");
     }

   /* console.log(scrollPos);*/

});

/*Smooth scloll*/

  $("[data-scroll]").on("click", function(event) {
   
   event.preventDefault();
   let nav = $("#nav");
   let elementId = $(this).data('scroll');
   let elementOffset = $(elementId).offset().top;

   nav.removeClass("show");

   $("html, body").animate({
       scrollTop: elementOffset -70
         
   }, 700);

  });	

/*  Slider https://kenwheeler.github.io/slick/*/
    
    let slider = $("#reviewsSlider");

       slider.slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         fade: true,
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: false
});

       /*Nav toggle*/
          let nav = $("#nav");
       $("#navToggle").on("click", function(event){  /*при клике на nawToggle выполняет*/
          event.preventDefault(); /*отменяет эфекты*/
          
          nav.toggleClass("show"); /*додаёт класс show*/
       });

});