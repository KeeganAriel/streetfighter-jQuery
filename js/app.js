$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
  			{'left': '1020px'},
  			850,
  			function() {
   			$(this).hide();
    		$(this).css('left', '655px');
  			}
		);
	})

	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.1;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
}

	$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			console.log('test');
			}
		})

	.keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			console.log('testing');
			}
		});
});
