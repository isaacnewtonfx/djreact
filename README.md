djreact is a seamless django and reactjs integration starter project to speed up the setup of 
a modern fullstack development environment. You can install additional frontend and backend tools when needed.

The end result is a hybrid application that can work normally as a django app with the traditional templates system
or with react controlling the entire frontend and just interacting with Django Rest Framework API for data.

ARTICLE ON THIS PROJECT
https://owais.lone.pw/blog/webpack-plus-reactjs-and-django/

MAJOR DEPENDENCIES

  1.Operating System: Ubuntu Linux 18.04.3 LTS Bionic Beaver
  
  2.Django Version: 2.1
  
  3.React Version: 16.9.0
  
  4.React-Dom Version: 16.9.0
  
  5.Webpack Version: 4.40.2
  
  6.Webpack-Cli Version: 3.3.8
  
  7.Webpack-Dev-Server Version: 3.8.1
 
 Check the package.json and requirements.txt files for other dependencies and their versions
  
  
SETUP

  Do all the following in the unbuntu terminal

  1. Install pip for python 3 on the O/S
     https://linuxize.com/post/how-to-install-pip-on-ubuntu-18.04/
  
  2. Install git on the O/S
     https://www.liquidweb.com/kb/install-git-ubuntu-16-04-lts/
 
  3. Create a directory to be used for python virtual environment. 
     Normally created at ~/.virtualenvs

  4. Install Python Virtual Environment Wrapper on the O/S
     https://virtualenvwrapper.readthedocs.io/en/latest/
  
  5. Use virtualenvwrapper to create a Python3 Virtual Environment directory (you can name it djangodev) 
     inside the .virtualenvs folder above.
     
  6. Activate the virtual environment using the command below
     $ workon yourVenvDirName
     
  7. Use git to clone this repo and cd into this project's root directory where manage.py file is located.
     $ git clone https://github.com/isaacnewtonfx/djreact.git
  
  8. At the project root directory, use npm to install the node packages
     $ npm install
  
  9. Open settings.py file and edit the WEBPACK_HMR parameter to be assigned to True if it not not already set to True.
  
      NB:
     - Setting WEBPACK_HMR to True means react build files would be served using the webpack dev server with hot reload!
     
     - Setting WEBPACK_HMR to False means react build files would not be served with the webpack dev server but rather 
         with a bundle tracker django package which helps to load the bundle files into django templates but on every change          in the source files, you must rebuild and reload the browser to see the changes. 
  
  10. At the project root directory, start the django server. Make sure you have activated the venv in step 6 above before          running this command.
     $ python manage.py runserver
     
  11. Open a new tab in the ubuntu terminal. The venv activation would be lost in this new tab but it is fine.
  
  12. At the project root directory, start the webpack dev server.
     $ npm run start
     
  13. Open your browser and navigate to localhost:8000 to see a welcome page with a react logo. This page is controlled by        react.
  
  14. Now navigate to localhost:8000/example/ to see a django template page which is not controlled by react
  
  
  CONCLUSION
  
  1. You can use react to control parts of the traditional django template pages especially where a lot of frontend logic is      needed. React will read data from django rest framework API. This gives better frontend code orginization, management        and improved readability.
  
  2. You can use react as the frontend of the entire project. This decision depends on your project requirements and the          strenghts of the development team.
  
  
  RESOURCES
  
  1. Learn reactjs 
  
  https://www.taniarascia.com/getting-started-with-react/
  
  https://reactjs.org/docs/hello-world.html
  
  https://reactjs.org/tutorial/tutorial.html
  
  
  2. Learn django
  
  https://docs.djangoproject.com/en/2.2/intro/tutorial01/
  
  All done     
