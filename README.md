# FCC Indy Website

http://free-code-camp-indy.github.io

## Navigation

[About this Project](#about-this-project)  
[Contribution Guidelines](#contribution-guidelines)  
[The Projects Page (Boards)](#the-projects-page-boards)  
[Prerequisites for running locally](#prerequisites-for-running-locally)  
[Running locally (first time)](#running-locally-first-time)  
[Running locally (all subsequent times)](#running-locally-all-subsequent-times)  
[Including Styles (Sass or CSS)](#including-styles-sass-or-css)  
[Assets](#assets)  
[Credits](#credits)


## About this Project

Website for the local Free Code Camp group in Indianapolis, IN.


## Contribution Guidelines

We welcome contributions from local Free Code Camp Indy members.
Please get in touch with Gwen Faraday if you would like to contribute to this project: __gwenfaraday@gmail.com__


## The Projects Page (Kanban Boards)

On the [Projects Page](https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io/projects) there are boards to track development. Here is how they work:

1. **Note** - Quick title of a task that needs to be done
1. **Issue** - Detailed description of what needs to be done. Comments from others regarding the task and what should be done or how it should be done.
1. **Groomed** - If the issue no longer needs to be fleshed out, it is moved to groomed, so people know it's ready to be worked on.
1. **In Progress** - If you see a groomed issues you want to work on, then you assign it to yourself and move it to in progress.
1. **Complete** - When an issue is done it is moved to completed.


## Prerequisites for Running Locally

1. Install [Git](http://git-scm.com) globally locally
1. Install [Node.js](http://nodejs.org) and NPM globally
1. Install the LiveReload plugin (recommended, not required)
 * [Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) - After install go to your Extension settings and give LiveReload access to file URLs
 * [Firefox plugin](https://addons.mozilla.org/en-US/firefox/addon/livereload/)


## Running locally (first time)

1. Fork this repo

 * Click the `fork` button at the top right of this repository

1. Clone down your fork

  * **OSX/Linux:**
    * Open Terminal
    * `mkdir ~/GitHub`
    * `cd ~/GitHub`
    * `git clone https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io fcc-indy`
    * `cd fcc-indy`
    * You now have the project stored in : Your User Profile/GitHub/fcc-indy
  * **Windows:**
    * Open Command Prompt
    * `md %USERPROFILE%\Documents\GitHub`
    * `cd %USERPROFILE%\Documents\GitHub`
    * `git clone https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io fcc-indy`
    * `cd fcc-indy`
    * You now have the project stored in : My Documents\GitHub\fcc-indy

1. Create a new branch named "issue#", example `issue7` or `issue15`
  * `git checkout -b issue16 master` (Change `16` to the number that [matches the issue](https://github.com/Free-Code-Camp-Indy/free-code-camp-indy.github.io/issues) you are working on.)
1. `npm install`
1. `npm start`
1. Navigate to [localhost:8000](http://localhost:8000)
1. Click the livereload icon in your browser to enable it for that page


## Running locally (all subsequent times)

1. `cd` into the directory:
  * **OSX/Linux:** `cd ~/GitHub/fcc-indy`
  * **Windows:** `cd %USERPROFILE%\Documents\GitHub\fcc-indy`
1. `npm install` (in case any dependencies have changed)
1. `npm start`
1. Navigate to [localhost:8000](http://localhost:8000)
1. Click the livereload icon in your browser to enable it for that page

## Including Styles (Sass or CSS)

1. Sass indented syntax files:

  * Save file with a `.sass` extension and precede filename with an `_` (eg `_filename.sass`)
  * Import file into `style.sass` file (eg `@import "filename"` - `_` and extension not required)
  
1. CSS or SCSS syntax files:

  * Save file with a `.scss` extension and precede filename with an `_` (eg `_filename.scss`)
  * Import file into `style.sass` file (eg `@import "filename"` - `_` and extension not required)
  
## Assets

[Google Drive](https://drive.google.com/drive/u/2/folders/0Bx3Axcu05dYsQW1raUFCSGM1Vzg) - *May have to request access*


## Credits

### Team Leader/Developer:

**[Matt Albright](https://github.com/orgs/Free-Code-Camp-Indy/people/mattattaq)**

### Project Manager:

**[Gwen Faraday](https://github.com/gwenf)**

### Designers:

*coming soon...*

### Developers:

* **[Larry Torvalds](http://whitehouse.gov)

### Advisors:

* **[The Jared Wilcurt](https://github.com/TheJaredWilcurt)**
