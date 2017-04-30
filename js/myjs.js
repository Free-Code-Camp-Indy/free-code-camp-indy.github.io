$(function(){
	var includes = $('.include');
	jQuery.each(includes, function(){
		var file = 'views/' + $(this).data('include') + '.html';
		$(this).load(file);
	});
});
