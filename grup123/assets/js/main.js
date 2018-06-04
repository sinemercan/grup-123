$(function() {

    var footerTop = $('footer').position().top;

    var outerHeight = $(window).outerHeight() - 250;

    var sidebarMenu = $('.sidebar-menu li');



    /* Scroll Event */

    $(window).scroll(function() {

        var sidebarMenu = $('.sidebar-menu');

        var limit = $(window).scrollTop() + outerHeight;

        if ( limit > footerTop ) {

            sidebarMenu.fadeOut(300);

        }

        else {

            sidebarMenu.fadeIn(300);

        }

    });



    /* Mega Menu Event */

    $('.menu-toggle').click(function() {

        var megaMenu = $('.mega-menu');

        if(megaMenu.css('display') == 'none') {

            $(this).find('span').removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');

        }else {

            $(this).find('span').removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');

        }

        megaMenu.slideToggle();

    });



    /* Animate Scroll Event */

    $('.animate-scroll').click(function(event){

        event.preventDefault();

        var element = $(this).attr('href');

        $('html, body').animate({

            scrollTop: $(element).offset().top() - $(window).outerHeight()/2

        }, 500);

    });



    /* Sidebar Menu Event */

    sidebarMenu.click(function() {

        sidebarMenu.removeClass('active');

        $(this).addClass('active');

    });

});