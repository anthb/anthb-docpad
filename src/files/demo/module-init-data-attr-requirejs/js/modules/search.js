define(["jquery", "modules/ND"], function(jQuery, NDModules) {
        

        var Search;

        Search = function(element, options) {

        	var name = "search",
        		version = 0.1;

    		return {
    			init: function() {
	        		console.log('running '+ name + ' module');

	        		this.element = element;
	        		this.options = options;
	        	},

	        	getName: function() {
        			return name;
	        	},

	        	getVersion: function() {

	        		return version;
	        	}
    		};

        };

        // Register the module name and object (to be used as a reference), this will be called from within the NDModule initialiser.
		NDModules.register("search", Search);
        return Search;

    }
);