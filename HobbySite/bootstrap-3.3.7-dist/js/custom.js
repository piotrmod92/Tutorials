
$(function(){
	// reset scroll - disabled
	//$.scrollTo(0);
	
	// links
	$('.homepage-link').click(function() { $.scrollTo($('body'), 500); });
	$('.about-link').click(function() { $.scrollTo($('#about'), 500); });
	$('.formula-link').click(function() { $.scrollTo($('#formula'), 500); });
	$('.cern-link').click(function() { $.scrollTo($('#cern'), 500); });
	$('.guitar-link').click(function() { $.scrollTo($('#guitar'), 500); });
	$('.cycling-link').click(function() { $.scrollTo($('#cycling'), 500); });
	$('.back-to-top').click(function() { $.scrollTo($('body'), 100 + $(window).scrollTop()*0.2); });

	// gallery
	$('.thumbnail').click(function(){
		$('.modal-body').empty();
		var title = $(this).parent('a').attr("title");
		var description = $(this).parent('a').attr("data-desc");
		$('.modal-title').html(title);
		$('.modal-description').html(description);
		$($(this).parents('div').html()).appendTo('.modal-body');
		$('#myModal').modal({show:true});
	});

	// fit headers
	$("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '50px' });
	$("header h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '30px' });
});

// show back-to-top icon
$(window).scroll(function(){
	if($(this).scrollTop()>170) $('.back-to-top').fadeIn();
	else $('.back-to-top').fadeOut();

	var wScroll = $(this).scrollTop();
	var secPosition = $('#guitar').offset().top;
	var degrees = -(wScroll-secPosition+100)/3;
	$('#guitar-left').css({
		'transform': 'rotate3d(0.4,0.1,0.1,' + degrees + 'deg)'
	});
});

/* FitText.js 1.2 */
(function( $ ){
  $.fn.fitText = function( kompressor, options ) {
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);
    return this.each(function(){
      // Store the object
      var $this = $(this);
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };
      // Call once to set.
      resizer();
      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);
    });
  };
})( jQuery );