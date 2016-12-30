function Folder(params){
	this.href = params.href;
	this.image = params.image;
	this.location = params.location;
	this.description = params.description;

	this.build = function(){
		return _.template(
			'<a href="<%= href %>">' +
				'<div class="folder">' +
					'<div class="img-container">' +
						'<img class="img-responsive" alt="presentation" src="<%= image %>"/>' +
					'</div>' +
					'<div class="folder-desc">' +
						'<h2><%= location %></h2>' +
						'<p><%= description %></p>' +
					'</div>' +
				'</div>' +
			'</a>'
		)(this);
	}
}