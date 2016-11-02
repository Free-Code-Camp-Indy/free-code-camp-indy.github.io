$(function(){
  console.log('myJs works!');
  $('.hamburger').on('click', function(){
    $('.menu').toggleClass('open');
    console.log('fired!');
  }),
  console.log('this injection works!');
  var includes = $('.include');
  jQuery.each(includes, function(){
    var file = 'views/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});
