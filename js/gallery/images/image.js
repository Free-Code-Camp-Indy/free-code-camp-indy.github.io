function image(params, index){
	this.filter = params.filter;
	this.src = params.src;
	this.label = params.label;
	this.index = index;

	this.gridSizer = (index===0);

	this.build = function(){
		return _.template(
			'<div class="grid-item <%= filter%>">' +
				((this.gridSizer)?'<div class="grid-sizer"></div>' : "" )+
				'<img grid-key=<%= index %> alt=<%= label %> src="<%= src %>"/>' +
			'</div>'
		)(this);
	}
}