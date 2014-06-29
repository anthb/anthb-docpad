requirejs.config({

	paths: {
		jquery: [
			'https://code.jquery.com/jquery-2.1.1.min', // CDN
			'/bower_components/jquery/dist/jquery.min' // Fallback
		]
	}
});


requirejs(["modules/ND", "modules/spring", "modules/search", "modules/mike"], function(NDModules, spring, search, mike) {
//requirejs(["modules/ND", "modules/spring", "modules/search"], function(NDModules, spring, search) {
	"use strict";
    
    // Kicks off the process to initialise the required modules that have been added to the modulesList and objectList arrays
	NDModules.init();
});