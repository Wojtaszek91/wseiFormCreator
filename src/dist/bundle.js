"use strict";
var App;
(function (App) {
    let FieldType;
    (function (FieldType) {
        FieldType[FieldType["InputField"] = 0] = "InputField";
        FieldType[FieldType["TextAreaField"] = 1] = "TextAreaField";
        FieldType[FieldType["DateField"] = 2] = "DateField";
        FieldType[FieldType["EmailField"] = 3] = "EmailField";
        FieldType[FieldType["SelectField"] = 4] = "SelectField";
        FieldType[FieldType["CheckboxField"] = 5] = "CheckboxField";
    })(FieldType = App.FieldType || (App.FieldType = {}));
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map