var blogs = [];

/*
To add a new blog, add a new item to blogsInfo and push that item to blogs.
*/

var blogsInfo = [{
    'name': "Lorian Bates",
    'imageLocation': './images/blog_images/lorian_bates_blog.png',
    'link': 'https://locodesblog.wordpress.com/2016/08/04/polymorphic-me/'
  },
  {
    'name': "McKinnely Bentley",
    'imageLocation': './images/blog_images/mckinnely_bentley_blog.jpg',
    'link': 'http://mbcodeguy.blogspot.com/'
  },
  {
    'name': "Matthew David",
    'imageLocation': './images/blog_images/matthew_allbright_blog.jpg',
    'link': 'https://mattattaqdevblog.wordpress.com/'
  },
  {
    'name': "Gwendolyn Faraday",
    'imageLocation': './images/blog_images/gwen_faraday_blog.jpg',
    'link': 'http://gwenfaraday.com/learningcode/'
  },
  {
    'name': "Nicholas Gillespie",
    'imageLocation': './images/blog_images/nicolas_gillespie_blog.jpg',
    'link': 'http://programpractical.com/'
  },
  {
    'name': "Gavyn Leavitt",
    'imageLocation': './images/blog_images/gavs_dev_blog.jpg',
    'link': 'https://gavsdevblog.wordpress.com/'
  },
  {
    'name': "J.T. Maupin",
    'imageLocation': './images/blog_images/jt_maupin_blog.jpg',
    'link': 'https://jmsmaupin.wordpress.com/'
  }
];

for (var i = 0; i < blogsInfo.length; i++){
  blogs.push(new blog(blogsInfo[i]));
}
