let navToggle=$("#navToggle");
let nav=$("#nav");



//   tabs //
$('.features .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.features').find('.tab__item').removeClass('active-tab').hide();
        $('.features .features__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
        
    });

    //  anchor//
    $("[data-scroll]").on('click',function(event) {
        event.preventDefault();
    
        let elementID=$(this).data('scroll');
        let elementOffset=$(elementID).offset().top;
        
        
    
        $("html, body").animate({
            scrollTop: elementOffset-70
    
        }, 2500);
        
    });	

  //  burger click//
    navToggle.on('click', function(event) {
        event.preventDefault();

        let nav=$("#nav");
       

        nav.toggleClass("show");
      });

    //   fixed header//
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
   
    
    
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