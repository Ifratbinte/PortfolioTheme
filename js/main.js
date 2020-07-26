jQuery(document).ready(function(){
	
	//isotope portfolio
	$('.all-portfolios').isotope({
		itemSelector:'.single-portfolio',
		layoutMode:'fitRows'
	});

	$('.portfolio-controls ul li').click(function(){
		$('.portfolio-controls ul li').removeClass('active-portfolio');
		$(this).addClass('active-portfolio');
		
		var selector = $(this).attr('data-filter');
		$('.all-portfolios').isotope({
			filter:selector
		});
		return false;
	});
	
	$(".testimonials").owlCarousel({
			loop:true,
			items:1,
			dots:true,
			autoplay:true,
		});

	
	 jQuery("#example").typer({
        strings: [
            "Web Developer",
            "Responsive Designer",
            "WordPress Customizer"
        ]
    	});
		
		
		jQuery("#cssmenu").menumaker({
			title:"MENU",
			format:"multitoggle"
		});
		
		
	

    });

jQuery(document).ready(function(){

 jQuery('#bar1').barfiller({barColor:'#d39e33',duration:1000});
 jQuery('#bar2').barfiller({barColor:'#d39e33',duration:2000});
 jQuery('#bar3').barfiller({barColor:'#d39e33',duration:3000});
 jQuery('#bar4').barfiller({barColor:'#d39e33',duration:4000});

  
});