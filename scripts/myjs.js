$(function(){console.log("myJs works!");var i=$(".include");jQuery.each(i,function(){var i="views/"+$(this).data("include")+".html";$(this).load(i)})});
