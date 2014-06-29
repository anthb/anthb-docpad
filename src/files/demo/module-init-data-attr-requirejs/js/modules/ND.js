define(["jquery"], function(jQuery) {
        

		// Private module list - The module names are added to this array.
        var moduleList = [],
        	objectList = [];

        return {

        	init: function() {

        		var self = this;

        		// run the moduleList array 
        		for(var i = 0; i<moduleList.length; i++) {
        			console.log(moduleList);
        			console.log(objectList);
        			// Get the dom elements that match a moduleList name and run their init function.
        			var moduleElement = $('[data-'+moduleList[i]+']');
        			
        			if(moduleElement.length > 0) {

        				// If the jQuery object length indicates multiple elements we want to make sure that each element is treated and runs separately.
        				moduleElement.each(function(index) {

        					// Get the data options
        					// Module options must be valid JSON format to be interpreted by .data() as an object.
        					var currentElement = $(this),
        						moduleOptions = currentElement.data('options');

    						// Run the moduleTasks method - I have separated this for now, but may be able to be brought inside this function.
        					self.runModuleTasks(currentElement, moduleOptions, i);
        				});
        			}
        		}
        	},

        	runModuleTasks: function(element, options, i) {

        		// Instantiate a new Object and pass in the element and options.
        		// Each ND module MUST have these two parameters.
        		var newModule = new objectList[i](element, options);
        		newModule.init();
        	},

        	register: function(name, obj) {

        		// These are kept in sync to keep it simple (separate arrays)
        		moduleList.push(name);
        		objectList.push(obj)
        	},

        	getModules: function() {
        		return moduleList;
        	}
        }
    }
);