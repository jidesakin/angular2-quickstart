/**
 * Created by jidesakin on 6/2/16.
 */

(function (app) {
    app.AppComponent =
        ng.core.Component({
            selector: "my-app",
            template: "<h1>My First Angular2 App</h1>"
        })
            .Class({

                constructor: function() {
                    "use strict";

                }

            });

})(window.app || (window.app = {}));