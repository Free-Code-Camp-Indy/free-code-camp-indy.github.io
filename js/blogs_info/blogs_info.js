var blogs = [];

/* 
To add a new blog, add a new item to blogsInfo and push that item to blogs.
*/

var blogsInfo = {
  'gavynsBlog': {
    'name': "Gav\'s Dev Blog",
    'imageLocation': './images/blog_images/gavs_dev_blog.jpg',
    'link': 'https://gavsdevblog.wordpress.com/'
  }
};

blogs.push(new blog(blogsInfo.gavynsBlog));
