define(["jquery", "modules/ND"], function(jQuery, NDModules) {

        var Spring;

        Spring = function(element, options) {

        	var name = "spring",
        		version = 3.1;

    		return {
    			init: function() {
	        		console.log('running '+ name + ' module');

	        		// Probably need to merge this with a settings object.
	        		this.element = element; 
	        		this.options = options;

	        		// Run and setup this module.
	        		this.changeColour();

	        		if(this.options.clickable) {
	        			this.addClickEvent();	
	        		}
	        	},

	        	getName: function() {
        			return name;
	        	},

	        	getVersion: function() {

	        		return version;
	        	},

	        	changeColour: function() {

	        		var self = this;

	        		$(this.element).css({
	        			"color": self.options.color
	        		});
	        	},

	        	addClickEvent: function() {

	        		this.element.on("click", function(){

	        			alert('Clickable option was passed in');
	        		})

	        	}
    		};
        };        

        // Register the module name and object (to be used as a reference), this will be called from within the NDModule initialiser.
		//NDModules.register(NDSpring.getName(), NDSpring);
		NDModules.register("spring", Spring);
        return Spring;

    }
);