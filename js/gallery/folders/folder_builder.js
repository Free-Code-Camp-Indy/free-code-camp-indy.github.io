// A lot of inspiration from Gavyn Leavitt
function build(folders){
	folders.forEach(function(e){
		$(".gallery-folders").append(new Folder(e).build());
	})
}