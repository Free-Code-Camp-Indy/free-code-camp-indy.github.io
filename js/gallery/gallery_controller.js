
$(function(){
	images.forEach(function(element, i){
		$('.grid').append(new image(element, i).build())
	});

	var grid = $('.grid').imagesLoaded(function(){
		$('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer',
				gutter: 10
			}
		});
	})
	
	$(".filter-menu a").on('click', function(){
		$("a.active").removeClass("active");
		$(this).addClass("active");
		var filterVal = $(this).attr('data-val');
		grid.isotope({filter: filterVal});
	})

	$('img').click(function(e){
		$('.lightbox-content img').attr('src', e.target.src);
		$('.lightbox-content p').text(images[$(e.target).attr('grid-key')].label);
		$('.lightbox').show();
	})

	$('body').click(function(e){
		if(e.target.id === 'empty-space' || e.target.id === 'exit')
			$('.lightbox').hide();
	})

	$('body').keyup(function(e){
		if(e.key == 'Escape')
			$('.lightbox').hide();
	})
})
