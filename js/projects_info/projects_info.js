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
  },
  'scoutApp': {
    'name': "Scout-App",
    'imageLocation': './images/project_images/scout-app.jpg',
    'link': 'http://scout-app.io/',
    'description': "Scout-App, the easiest way to use Sass!",
    'languages': ["jQuery", "JS", "Node", "sass", "HTML"]
  }
};


projects.push(new project(projectsInfo.testProject));
projects.push(new project(projectsInfo.scoutApp));
