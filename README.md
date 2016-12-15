# FCC Indy Website

http://freecodecampindy.com

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

## Generate new mock "events" data
By hosting through git pages we've lost the ability to use a server-side to hide away secret API keys.  You should not commit secret API keys to a public repository. While we figure out a trusted solution, we must generate data and upload a ".mock.json" file locally using your own API key.  Note: you only have a limited number of API requests per day so don't send too many requests.

Here's how you set up to generate these files.

#### The Easy Way
1. Acquire an API key from Meetup.com by [visiting meetup's api key page](https://secure.meetup.com/meetup_api/key/)
1. Add this key to `meetup_api_key.txt`, a file you need to create at the root of this repository
1. Run `npm run generate`

#### The Hard Way
The bird's eye view of what we're going to do involves learning a little of how your terminal works, then what an environment variable is and how to set one.  If you are on Windows you may want to download a UNIX-like shell such as [Cygwin](https://www.cygwin.com/) in order to follow these steps.  Alternatively you can search for powershell or command prompt variations of these shell commands.

1. Acquire an API key from Meetup.com by [visiting meetup's api key page](https://secure.meetup.com/meetup_api/key/)
1. You must then populate a environment variable called `MEETUP_API_KEY` with your API key.
  * You can create a temporary environment variable running: `export MEETUP_API_KEY="replace this text with actual key"`.  You can then test this by running `echo $MEETUP_API_KEY` to see the secret value you added.  Once you close your terminal window the variable is destroyed.
  * _Alternatively_ You can more permanently add this to your type of shell (e.g. `bash`, `zsh`)'s "runcom" (abbreviated `rc`) file!
    1. Find out which type of shell you use (most likely `bash`) by running `echo $0`.  Example run:
    ```
    > echo $0
    -zsh  # <-- this is my shell
    ```
    1. Look for your shell's "rc" file in your home directory (aka `~`) by running `ls -a ~ | grep "shell name"`, replacing `"shell name"` with the shell you identified in step #1.  Example run:
    ```
    > ls -a ~ | grep "zsh"
    .oh-my-zsh
    .zsh-update
    .zsh_history
    .zshrc  # <-- Here it is!
    ```
    If you do not see a "rc" file for your shell, make one for your shell's type (e.g. `touch ~/.bashrc`).
    1. Open up the "`.shellrc`" you found in step #2 in a text editor.  Once opened add `export MEETUP_API_KEY="replace this text with actual key"`.
    1. Open a new terminal window.  Test the success of your endeavors by running: `echo $MEETUP_API_KEY`.
1. Run `npm run generate`.  If you set the `MEETUP_API_KEY` correctly you _should_ not encounter errors.
1. Feel free to commit the newly generate `free-code-camp-events.mock.json` data if information has been updated.

Note: Make sure you have not committed and pushed up your API key somehow, or else you must *immediately* generate a new key!

## Assets

[Google Drive](https://drive.google.com/drive/u/2/folders/0Bx3Axcu05dYsQW1raUFCSGM1Vzg) - *May have to request access*


## Credits

### Team Leader/Developer:

**[Matt Allbright](https://github.com/orgs/Free-Code-Camp-Indy/people/mattattaq)**

### Project Manager:

**[Gwen Faraday](https://github.com/gwenf)**

### Designers:

* **[Tara Ree Miller](https://github.com/tararee)**

### Developers:

* **[Larry Torvalds](http://whitehouse.gov)**
* **[Andrew Allbright](https://github.com/aallbrig)**

### Advisors:

* **[The Jared Wilcurt](https://github.com/TheJaredWilcurt)**
