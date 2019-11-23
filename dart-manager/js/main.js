var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var accordion__content = this.nextElementSibling;
        if (accordion__content.style.maxHeight) {
            accordion__content.style.maxHeight = null;
            accordion__content.classList.remove("active");
        } else {
            accordion__content.style.maxHeight = accordion__content.scrollHeight + "px";
           
        }
       

    });
}





$(function(){
/*Reviews: https://kenwheeler.github.io/slick/*/
let slider=$("#reviewsSlider");

slider.slick({
    infinite: true,
  slidesToShow:2,
  slidesToScroll: 2,
  arrows:true,
  vertical:true,
  
  verticalSwiping:true,
  responsive:[
    {
      breakpoint: 960,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }, 
    {
        breakpoint: 750,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
]

});
let sliderSecond=$("#sliderSecond");

sliderSecond.slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows:true,
    
});
	 /*Fixed header*/ 
   let header = $("#header");
   let intro = $("#intro");
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();
   let nav=$("#nav");
   let navToggle=$("#navToggle");
   
   
   checkScroll(scrollPos, introH);
   
   $(window).on("scroll resize",function(){
     let introH = intro.innerHeight();
     scrollPos = $(this).scrollTop();
     
   checkScroll(scrollPos, introH);
   })
   function checkScroll(scrollPos, introH){
   if(scrollPos>introH){
   
   header.addClass('fixed');
     }else{
   header.removeClass('fixed');
     }
   }
/*Smooth scroll*/ 
$("[data-scroll]").on('click',function(event) {
    event.preventDefault();

    let elementID=$(this).data('scroll');
    let elementOffset=$(elementID).offset().top;
    
    

    $("html, body").animate({
        scrollTop: elementOffset

    }, 2500);
    
});	
/*navToggle*/


navToggle.on('click', function(event) {
  event.preventDefault();

  nav.toggleClass("show");
});
});
