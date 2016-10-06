$(function(){
  console.log('myJs works!');
  $('.hamburger').on('click', function(){
    $('.menu').toggleClass('open');
    console.log('fired!');
  })
});
