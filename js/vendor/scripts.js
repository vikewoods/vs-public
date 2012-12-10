$(document).ready(function(){


  $('body').addClass($.client.os + ' ' + $.client.browser);

  $('.slider').mobilyslider({
	content: '.sliderContent', // class for slides container
	children: 'div', // selector for children elements
	transition: 'fade', // transition: horizontal, vertical, fade
	animationSpeed: 1800, // slide transition speed (miliseconds)
	autoplay: false,
	autoplaySpeed: 9000, // time between transitions (miliseconds)
	pauseOnHover: false, // stop animation while hovering
	bullets: false, // generate pagination (true/false, class: sliderBullets)
	arrows: true, // generate next and previous arrow (true/false, class: sliderArrows)
	arrowsHide: false, // show arrows only on hover
	prev: 'prev', // class name for previous button
	next: 'next', // class name for next button
	animationStart: function(){}, // call the function on start transition
	animationComplete: function(){} // call the function when transition completed
  });


});
