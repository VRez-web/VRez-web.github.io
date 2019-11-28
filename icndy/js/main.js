$(document).ready(function () {
   $('#intro__inner').on('click','a',function(event){
    event.preventDefault();
      var id=$(this).attr('href'),
         top=$(id).offset().top;
    $('html,body').animate({scrollTop:top-20},1500);
   });
});

function burgerMenu(selector){
   let menu=$(selector);
   let button=menu.find('.burger-menu__btn');
   let links=menu.find('.header__menu-link');

   button.on('click',(e)=>{
      e.preventDefault();
      toggleMenu();
   });

   links.on('click', ()=>toggleMenu());
   function toggleMenu(){
      menu.toggleClass('active');
      
      if(menu.hasClass('active')){
         $('body').css('overflow','hidden');
      }else{
         $('body').css('overflow','visible');
      }
   }
}

burgerMenu('.burger-menu');