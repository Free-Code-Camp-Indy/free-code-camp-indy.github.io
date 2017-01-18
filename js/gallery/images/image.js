function image(params){
	this.filter = params.filter;
	this.src = params.src;

	this.build = function(){
		return _.template(
			'<div class="grid-item <%= filter%>">' +
				'<div class="grid-sizer"></div>' +
				'<img src="<%= src %>"/>' +
			'</div>'
		)(this);
	}
}