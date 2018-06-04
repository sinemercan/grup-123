function scrollSpy(){
	var middle = $(window).scrollTop() + $(window).outerHeight()/2;
	$('section').each(function(index){
		var top = $(this).position().top;
		//console.log(index  + " > " + top);
		if(middle >= top && middle < top + $(this).height()){
			$('.side-menu li').removeClass('active');
			$(".side-menu li:nth-child(" + (index+1) + ")").addClass('active');
		}

	});
}

$(window).scroll(function(){
	var menu = $('.side-menu');
	var footer = $('footer');


	if(($(window).scrollTop() + $(window).outerHeight()) > footer.position().top ) {
		menu.fadeOut(300);
	}else{
		menu.fadeIn(300);
	}
});

$(document).ready(function(){
	scrollSpy();

	$('.animate-scroll').click(function(event){
		event.preventDefault();
		var elem = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(elem).offset().top - $(window).outerHeight()/2
		}, 500);

	});

	$('.menu-toggle').click(function(){
		if($('.mega-menu').css('display') == 'none'){
			$(this).find('span').removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
		}else{
			$(this).find('span').removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');
		}
		$('.mega-menu').slideToggle();
	});
});

$(window).scroll(function(){
	scrollSpy();
});