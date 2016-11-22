var blogs = [];

/* 
To add a new blog, add a new item to blogsInfo and push that item to blogs.
*/

var blogsInfo = [{
    'name': "Lorian Bates",
    'imageLocation': '',
    'link': 'https://locodesblog.wordpress.com/2016/08/04/polymorphic-me/'
  },
  {
    'name': "McKinnely Bentley",
    'imageLocation': '',
    'link': 'http://mbcodeguy.blogspot.com/'
  },
  {
    'name': "Matthew David",
    'imageLocation': '',
    'link': 'https://mattattaqdevblog.wordpress.com/'
  },
  {
    'name': "Gwendolyn Faraday",
    'imageLocation': '',
    'link': 'http://gwenfaraday.com/LearningCode/'
  },
  {
    'name': "Nicholas Gillespie",
    'imageLocation': '',
    'link': 'http://programpractical.com/'
  },
  {
    'name': "Gavyn Leavitt",
    'imageLocation': './images/blog_images/gavs_dev_blog.jpg',
    'link': 'https://gavsdevblog.wordpress.com/'
  },
  {
    'name': "J.T. Maupin",
    'imageLocation': '',
    'link': 'https://jmsmaupin.wordpress.com/'
  },
  {
    'name': "Kimberly Sharpe",
    'imageLocation': '',
    'link': 'http://kimmihack.blogspot.com/'
  },
  {
    'name': "Larry Tooley",
    'imageLocation': '',
    'link': 'http://damagedtechnologies.com'
  }
];

for (var i = 0; i < blogsInfo.length; i++){
  blogs.push(new blog(blogsInfo[i]));
}
