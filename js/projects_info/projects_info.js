var projects = [];

/* 
To add a new project, add a new item to blogsInfo and push that item to projects.
*/

var projectsInfo = {
  'testProject': {
    'name': "Gav\'s Dev Blog",
    'imageLocation': './images/blog_images/gavs_dev_blog.jpg',
    'link': 'https://gavsdevblog.wordpress.com/',
    'description': "New Description",
    'languages': ["HTML", "CSS", "JS"]
  }
};


projects.push(new project(projectsInfo.testProject));
