$(document).ready(function($){


      
logo_flag=true;
jQuery(document).ready(function ($) {
    //initialise Stellar.js
    $(window).stellar();
    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
             $('.navigation li[data-slide="' + dataslide + '"] a').css("color","#fff");
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else {
            $('.navigation li[data-slide="' + (dataslide) + '"]').addClass('active').next().removeClass('active');
            $('.navigation li[data-slide="' + dataslide + '"] a').css("background-color","#fff");
        }

        if(dataslide == 1)
        {
             
             $('.navigation').removeClass('second_page');
            $('.navigation').addClass('second_page_back');
            $('.navigation li a').css("color","#e1e1e1");
           
            $('.navigation li').removeClass('active');
        }
        else
        {
          
            $('.navigation').addClass('second_page');
            $('.navigation li a').css("color","#000");
        }
       
    });
    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        console.log(mywindow.scrollTop());
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
        if(mywindow.scrollTop() == 100)
        {
        	$('.navigation li[data-slide="2"]').removeClass('active');
        	$('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation').addClass('second_page_back');
        	$('.navigation').addClass('second_page');
        	$('.navigation li a').css("color","#000");
        }
        if(mywindow.scrollTop() == 300)
        {
            $('.navigation li[data-slide="1"]').removeClass('active');
            $('.navigation li[data-slide="2"]').addClass('active');
        }
        if(mywindow.scrollTop() < 500 && logo_flag == false)
        {
            $('#logo').empty().fadeOut(2);
            $('#logo').append('<img  src="image/logo.png" Style="height:55px;" />').fadeIn(500);
            logo_flag = true;
        }

         if(mywindow.scrollTop() > 600 && logo_flag == true)
        {
            $('#logo').empty().fadeOut(2);
            $('#logo').append('<img  src="image/smlogo.png" Style="height:55px;" />').fadeIn(500);
            logo_flag = false;
        }

        if(mywindow.scrollTop() < 5 )
        {
            $('.navigation').removeClass('second_page');
        	$('.navigation').addClass('second_page_back');
        	$('.navigation li a').css("color","#e1e1e1");

        	$('.navigation li').removeClass('active');
        }
    });
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1500, 'easeOutQuint');

    }
    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
   
});
});