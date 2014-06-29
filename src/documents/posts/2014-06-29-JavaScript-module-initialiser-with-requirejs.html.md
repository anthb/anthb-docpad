---
layout: post
title: "JavaScript module initialiser using data attributes and requireJS"
date: 2014-06-29 15:00
comments: true
tags: JavaScript, requirejs, data-attributes
featureImg: "/images/module-init.jpg"
snippet: "<p>Using data attributes and requirejs together to create loosely coupled modules that can be initialised through the use of data-attributes. A main initialiser module will kick off the process and take it away from there.</p>"
---

I have been using [Zurb foundation](http://zurb.foundation.com) for the past 18 months as my go to framework for responsive websites, which is almost every case. Something pretty cool that Foundation implements is an ability for you to initialise any module by applying its name as a data attribute. Foundation does a lot of things under the hood, but in its simplest form it loads its individual JavaScript modules on the Foundation namespace, giving it a lot of flexibility at runtime. 

In one of the platforms I use at work, we have been using requireJS as a JavaScript module loader, I really like the pattern of initialising modules via a data attribute and wanted to combine it with requireJS. As this platform is an enterprise content management system, the people publishing day to day are usually not very familiar with JavaScript or how it all works. When building our applications it's not just a matter of doing what is technically best practice, but also taking into consideration what is going to be best for the publisher and end user. Publishers can put modules almost anywhere on any page and also potentially have the same module many times on one page, so we have to be able to handle this. It makes sense to take away the need for any inline JavaScript on the page, and I think the data attribute initalising pattern works great.

The idea to get this rolling is following:

1. Define an initialiser module
2. Define your other modules that require this module
3. Load all your modules inside your main.js
4. Run the initialiser module, thus searching for which of your modules need to be initialised

[Initialiser module](https://github.com/anthb/requirejs-data-attr-init/blob/master/js/modules/ND.js)
__________________

This is the engine of the entire system, we declare two private arrays which store the names of the possible modules we are loading and a reference to the class.

We expose three public methods via an object literal, I want this to be a singleton as maintaining state on the arrays is important:
 
* init - Which loops over the arrays and finds if the data-attr is there on the page to be initialised. Also gets the data-options attribute to pass in options to the class that is to be initialised.
* runModuleTasks - This method runs for each item that is part of the jQuery object that matches its data-attr for that particular module.
* register - To be used run in each of your modules, will push the relevant data to the private arrays.

[Individual modules](https://github.com/anthb/requirejs-data-attr-init/blob/master/js/modules/spring.js)
___________________

This is a standard module that you accepts to parameters:

1. The element that has the data-attr that initialises the module
2. Any options you pass in using the data-options attribute


HTML Elements
_____________

To successfully run the modules the actual HTML elements on the page only need one thing - Have the correct data-attr. In the modules you specify a name for that module and that is what you have to call to run the module through the data-attr. In the example above I am demonstrating the module "spring", so to initialise this you need to apply "data-spring" to the element.

Optionally we can apply a data-options attribute to the element to allow options to be passed in. The only requirement for the options is to specify them in valid JSON format, the modules will take care of the rest.

[See it in action](/demo/module-init-data-attr-requirejs/)
______
Check out the [demo](/demo/module-init-data-attr-requirejs/) and let me know what you think.




