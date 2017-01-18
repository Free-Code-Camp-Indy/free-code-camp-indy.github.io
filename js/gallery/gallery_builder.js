$(function(){
	
	//append all images to .grid and then initialize isotope

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
})
