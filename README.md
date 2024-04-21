## Links to the Teacher's Shaun classes and links he has shared.
Class: https://www.youtube.com/watch?v=F7PLPJqVotk&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=2

🐱‍💻 🐱‍💻 BUY THE FULL 20-hr COURSE ON UDEMY:
https://www.thenetninja.co.uk/udemy/v...

🐱‍💻 🐱‍💻 Course Files:
+ https://github.com/iamshaunjp/Vue-3-F...

🐱‍💻 🐱‍💻 My Udemy Courses:
+ Modern JavaScript - https://www.thenetninja.co.uk/udemy/m...
+ Vue JS  & Firebase - https://www.thenetninja.co.uk/udemy/v...
+ D3.js & Firebase - https://www.thenetninja.co.uk/udemy/d...

🐱‍💻 🐱‍💻 Helpful Links:
+ HTML & CSS Course -   

 • https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&index=1&t=0s 

# to-vue-or-not-to-vue

Single Page Application (SPA)
- Only a single HTML page sent (initially) to the browser
- Vue intercepts subsequent requests and handles "page" changes in the browser by swapping what components are shown on the page
- Results in a much faster and smoother website experience

v3.vuejs.org/guide/introduction.html

## Vue documentation and link to use in code.
Vue docs: https://vuejs.org/guide/quick-start.html

You can use Vue directly from a CDN via a script tag:
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/vue@3.0.2"></script>

### Notes from class:
Mounting means putting elements into the DOM. 
DOM stands for Document Object Model. The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

To make it simple, mounted means the component has been loaded to the DOM and unmounted means the components has been removed from the DOM.

v-on is called a directive

this. references the component itself

Generally adding and removing from the DOM is more expensive and time consuming. Than hiding and showing in CSS. v-show uses CSS, while v-if adds to the DOM

@ is shortcut for v-on, : is shortcut for bind:

list-style-type: none; is to make the bullet points disappear from a list

attribute binding tells the page to use the element listed in the jvscript

he's got a separate whole class just over flex!

Dynamic classes, the isFav is a class attribute.
It will have a key:value pair.

CLI: Command Line Interface

I followed the instructions on the website https://cli.vuejs.org on installation of the cli tools:

node -v (shows version of node.js installed) v18.16.1
npm install -g @vue/cli
https://next.cli.vuejs.org/guide/cli-service.html
npm is a package manager for the JavaScript programming language 
Note that the -g flag in the command is what enables the npm CLI to install the package globally. Here is an example: npm install -g typescript. The command above will install TypeScript globally on your computer. After the installation, you can use TypeScript in any directory.
*******************************************************************************************
ks@s-MacBook-Pro ~ % npm install -g @vue/cli
npm notice 
npm notice New major version of npm available! 9.5.1 -> 10.5.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.5.2
npm notice Run npm install -g npm@10.5.2 to update!
npm notice 
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/@vue
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@vue'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@vue'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/@vue'
npm ERR! }
npm ERR! 
npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR! 
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/ks/.npm/_logs/2024-04-20T16_58_36_163Z-debug-0.log
*******************************************************************************************
This error occurs when you don't have the necessary permissions to create files or modify directories. Running commands with sudo temporarily elevates your privileges, but it's generally not recommended for global installations like Vue-cli.

To address the issue, you can try the following steps:

    Uninstall the global Vue CLI package by running: npm uninstall -g @vue/cli
    Clear the npm cache by running: npm cache clean --force
    Set the npm global prefix to a directory that you have write permissions for (e.g., your user's home directory): npm config set prefix ~/npm

    Add the new npm global bin directory to your system's PATH by adding the following line to your shell profile file (e.g., ~/.bash_profile, ~/.zshrc, or ~/.profile): export PATH="$HOME/npm/bin:$PATH"
    Close and reopen your terminal
    Install Vue CLI again: npm install -g @vue/cli After executing the above steps, you should be able to use the vue command without encountering permission errors.
*******************************************************************************************
https://www.architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/#.Uydjga1dXDg
Add to the PATH on Mac OS X 10.8 Mountain Lion and up
sudo nano /etc/paths
GNU nano is an easy-to-use command line text editor for Unix and Linux operating systems.

    Enter your password, when prompted.
    Go to the bottom of the file, and enter the path you wish to add.
    Hit control-x to quit.
    Enter “Y” to save the modified buffer.
    That’s it!  To test it, in new terminal window, type:
echo $PATH

You should see something similar to this (including the path you’ve added!):

MacMini:~ ryan$ echo $PATH
/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/share/npm/bin
*******************************************************************************************
Extending your PATH with:

~export PATH=/usr/local/share/npm/bin:$PATH~

isn't a terrible idea. Having said that, you shouldn't have to do it.

Run this:

npm config get prefix

The default on OS X is /usr/local, which means that npm will symlink binaries into /usr/local/bin, which should already be on your PATH (especially if you're using Homebrew).

So:

    npm config set prefix /usr/local if it's something else
*******************************************************************************************
zsh: command not found: vue

isn't `vue cli` deprecated? I think `npm create vue@latest` is what you really want! 
