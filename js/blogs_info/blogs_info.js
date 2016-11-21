var blogs = [];

/* 
To add a new blog, add a new item to blogsInfo and push that item to blogs.
*/

var blogsInfo = {
  'loriansBlog': {
    'name': "Lorian Bates",
    'imageLocation': '',
    'link': 'https://locodesblog.wordpress.com/2016/08/04/polymorphic-me/'
  },
  'mckinnelysBlog': {
    'name': "McKinnely Bentley",
    'imageLocation': '',
    'link': 'http://mbcodeguy.blogspot.com/'
  },
  'matthewsBlog': {
    'name': "Matthew David",
    'imageLocation': '',
    'link': 'https://mattattaqdevblog.wordpress.com/'
  },
  'gwensBlog': {
    'name': "Gwendolyn Faraday",
    'imageLocation': '',
    'link': 'http://gwenfaraday.com/LearningCode/'
  },
  'nicholasBlog': {
    'name': "Nicholas Gillespie",
    'imageLocation': '',
    'link': 'http://programpractical.com/'
  },
  'gavynsBlog': {
    'name': "Gavyn Leavitt",
    'imageLocation': './images/blog_images/gavs_dev_blog.jpg',
    'link': 'https://gavsdevblog.wordpress.com/'
  },
  'jtsBlog': {
    'name': "J.T. Maupin",
    'imageLocation': '',
    'link': 'https://jmsmaupin.wordpress.com/'
  },
  'kimberlysBlog': {
    'name': "Kimberly Sharpe",
    'imageLocation': '',
    'link': 'http://kimmihack.blogspot.com/'
  },
  'larrysBlog': {
    'name': "Larry Tooley",
    'imageLocation': '',
    'link': 'http://damagedtechnologies.com'
  }
};

blogs.push(new blog(blogsInfo.loriansBlog));
blogs.push(new blog(blogsInfo.mckinnelysBlog));
blogs.push(new blog(blogsInfo.matthewsBlog));
blogs.push(new blog(blogsInfo.gwensBlog));
blogs.push(new blog(blogsInfo.nicholasBlog));
blogs.push(new blog(blogsInfo.gavynsBlog));
blogs.push(new blog(blogsInfo.jtsBlog));
blogs.push(new blog(blogsInfo.kimberlysBlog));
blogs.push(new blog(blogsInfo.larrysBlog));

