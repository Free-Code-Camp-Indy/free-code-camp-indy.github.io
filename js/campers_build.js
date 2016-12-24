function build(array, isBlogs) {
  for (var i = 0; i < array.length; i++){
    var div = $("<div>", {class: "blog"});
    var imageDiv = $("<div>", {class: "blog_img_container"});
    var itemDescription = $("<div>", {class: "blog_description"});
    
    for (var key in array[i]) {
      console.log(key);
      if (key === "name") {
        itemDescription.append($("<h3>").append($("<a>", {href: array[i].link, target: "_blank"}).text(array[i].name)));
      }
      else if (key === "imageLocation") {
        imageDiv.append($("<img>", {class: "blog_img", src: array[i][key], alt: "blog title"}));
      }
      else if (key === "description") {
        itemDescription.append($("<p>").text(array[i][key]));
      }
      else if (key === "techStack") {
        for (var item in array[i].techStack){
          itemDescription.append($("<span>", {class: "devicon-" + array[i].techStack[item] + "-plain language_icon"}));
        }
      }
    }

    div.append(imageDiv);
    div.append(itemDescription);
    
    if (isBlogs) {
      $(".camper_blogs").append(div);
    }
    else {
      $(".camper_projects").append(div);
    }
  }
}

build(blogs, true);
build(projects, false);

$(".camper_projects").addClass("hidden");
$("#blog_toggle").addClass("active");

$("#blog_toggle").click(function(){
  $(".active").removeClass("active");
  $(this).addClass("active");
  $(".camper_projects").addClass("hidden");
  $(".camper_blogs").removeClass("hidden");
});

$("#projects_toggle").click(function(){
  $(".active").removeClass("active");
  $(this).addClass("active");
  $(".camper_projects").removeClass("hidden");
  $(".camper_blogs").addClass("hidden");
});
