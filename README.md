# Weather Checker

#### An application that uses the Open Weather Map API to find and display the current humidity in a city of the user's choice. Utilizes node.js, moment, and API's.

#### By **Dylan Dills**

## Description

Want to know what the humidity in your town is? What about the kelvin or the celsius? This application is the one for you. With Weather Checker, you can enter in any city and find the humidity, kelvin, or celsius of your town.


## Configuration/dependencies
  * Install the following packages:

    * Node Packages
      * The following were implemented for use in our Development Environment
        * gulp - allows us to run gulp commands on our project to ease the development process.
        * browser-sync - allows us to see our changes to our project as we save them.
        * browserify - makes our project browser compatible.
        * vinyl-source-stream - puts our browserified source code into a new file.
        * gulp-concat - concatenates our JS files into one.
        * gulp-uglify - consolidates our code into a form that is more easily digestible by the browser.
        * gulp-util - allows us to manage environment variables.
        * del - deletes all the files that are passed as arguments into the command.
        * jshint - analyzes code and warns about parts that don't follow stylistic conventions, or could cause bugs in the future.
        * sass - method translates our files into normal CSS sourcemaps
        * bower-files

    * Bower Packages
      * The following were implemented in our Production Environment
        * jquery
        * moment.js

  * It could include a short description of what each does for you

## Specifications
|Behavior|Input|Output|
|---|:---|:---|
| User Inputs City| "Portland, OR" | Accesses inputs into url of api call along with API Key|
User sees display of humidity, kelvin, and celsius of their city |"The humidity in Portland, OR is 54% The temperature in Portland, OR is 300.03° Kelvin or 26.88° Celsius"| Pulls out relevant info from API return and displays it to user|

## Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
    * build/css/vendor.css
    * build/css/main.css
    * build/js/vendor.min.js
    * build/js/app.js

## Setup/Installation Requirements

* Recieve API key by going to http://openweathermap.org/
* Clone the repository (https://github.com/dylandills/weather.git)
* Create .env file at top of directory, with putting exports.apiKey = "YOUR API KEY";
* Run 'npm install' in your chosen terminal application
* Run 'bower install' in your chosen terminal application
* Run 'gulp serve' in your chosen terminal application, then wait for your browser to be opened to the appropriate page.

## Known Bugs
* None at this time.

## Technologies Used

  * HTML
  * CSS
  * SASS
  * Javascript
  * jQuery
  * Bower
  * Node
  * Node Package Manager

## Support and contact details

_Email Dylan Dills, at dylan.dills@gmail.com, for questions, comments, or concerns_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Dylan Dills}_**
