function image(params){
	this.src = params.src;

	this.build = function(){
		return _.template(
			'<div class="gallery-item">' +
				'<img src="<%= src %>"/>' +
			'</div>'
		)(this);
	}
}