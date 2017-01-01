$(function(){
	build(folderInfo)
	$('.gallery-folders').on("click", "a", function(){
		$(".gallery-folders").addClass("hidden");

		cyberia.forEach(function(e){
			$(".masonry-grid").append(new image(e).build());
		})

		$(".masonry-container").removeClass("hidden");
		$(".masonry-grid").imagesLoaded(function(){
			$(".masonry-container").removeClass("hidden");
			$(".masonry-grid").masonry({
				itemSelector: '.gallery-item'
			})
		})
	});
})

