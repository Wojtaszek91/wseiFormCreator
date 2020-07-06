"use strict";
var App;
(function (App) {
    function autoBind(_, _1, descriptor) {
        const originalMethod = descriptor.value;
        const newDescriptor = {
            configurable: true,
            get() {
                return originalMethod.bind(this);
            },
        };
        return newDescriptor;
    }
    App.autoBind = autoBind;
})(App || (App = {}));
