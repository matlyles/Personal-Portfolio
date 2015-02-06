/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var triggerEvent= "click"; // touchend for mobile device, click for normal web browser
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}
	

	$('.shot a').on(triggerEvent,function(e){
		e.preventDefault();
		
		var shot = $(this).attr('href');

		buildTemplate(shot);
		
		$('.port-overlay').addClass('show');
	});

	$('.port-overlay .close-icon').on(triggerEvent,function(e){
		e.preventDefault();
		// $(this).val('');
		$('.port-overlay').removeClass('show');
		$('.port-info').remove();
		
	});



	jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

       	 });

		function buildTemplate(s) {
		$('.port-container').append('<div class="port-info"><img class="dr-shot" src="'+s+'"></div>');
	}

})();