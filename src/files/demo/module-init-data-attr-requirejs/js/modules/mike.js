define(["jquery", "modules/ND"], function(jQuery, NDModules) {

        var Mike;

        Mike = function(element, options) {

            var name = "mike",
                version = 9.99;

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
        NDModules.register("mike", Mike);
        return Mike;

    }
);