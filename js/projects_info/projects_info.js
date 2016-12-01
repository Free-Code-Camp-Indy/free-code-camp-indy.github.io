var projects = [];

/*
To add a new project, add a new item to blogsInfo and push that item to projects.
*/

var projectsInfo = {
  'scoutApp': {
    'name': "Scout-App",
    'imageLocation': './images/project_images/scout-app.jpg',
    'link': 'http://scout-app.io/',
    'description': "Scout-App, the easiest way to use Sass!",
    'languages': ["jquery", "javascript", "nodejs", "sass", "html5"]
  }
};


projects.push(new project(projectsInfo.testProject));
projects.push(new project(projectsInfo.scoutApp));
