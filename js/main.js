// MODAL//
var show = function (state) {
	document.getElementById("modal").style.display = state;
	document.getElementById("filter").style.display = state;
}
// Portfolio//
$(function () {
	$('.portfolio__group-btn .portfolio__btn').click(function () {

		var get_id = this.id;
		var get_current = $('.portfolio__item.' + get_id);

		$('.portfolio__item').not(get_current).hide(750);
		get_current.show(750);


			

		
	});

	$('#showall').click(function () {
		$('.portfolio__item').show(750);
	});
});

// TAB//
$('.about .tab').on('click', function (event) {
	var id = $(this).attr('data-id');
	$('.about').find('.tab__item').removeClass('active-tab').hide();
	$('.about .about__menu').find('.tab').removeClass('active');
	$(this).addClass('active');
	$('#' + id).addClass('active-tab').fadeIn();
	return false;

});

//burger//
let navToggle=$("#navToggle");
let nav=$(".about__menu-btn");
navToggle.on('click', function(event){
	event.preventDefault();
	

  nav.toggleClass("show");
});