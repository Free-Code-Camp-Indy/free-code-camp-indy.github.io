var projects = [];

/*
To add a new project, add a new item to blogsInfo and push that item to projects.
*/

var projectsInfo = [
  {
    'name': "Scout-App",
    'imageLocation': './images/project_images/scout-app.svg',
    'link': 'http://scout-app.io/',
    'description': 'Scout-App, the easiest way to use Sass!',
    'techStack': ["html5", "javascript", "jquery", "sass", "nodewebkit"]
  },
  {
    'name': "RegExBreakfast",
    'imageLocation': './images/project_images/regex-breakfast.png',
    'link': 'https://github.com/gwenf/regex-tutor',
    'description': 'Fun and interactive way to learn regex.',
    'techStack': ["html5", "javascript", "jquery", "sass"]
  }
];

for (var i = 0; i < projectsInfo.length; i++){
  projects.push(new project(projectsInfo[i]));
}
