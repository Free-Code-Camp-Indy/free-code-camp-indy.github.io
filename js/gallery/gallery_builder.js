$(function(){
	
	//append all images to .grid and then initialize isotope`

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
		var filterVal = $(this).attr('data-val');
		console.log(filterVal);
		grid.isotope({filter: filterVal});
	})

	$('img').click(function(e){
		$('.lightbox-content img').attr('src', e.target.src);
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
