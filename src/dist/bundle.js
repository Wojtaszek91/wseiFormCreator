"use strict";
var App;
(function (App) {
    let FieldType;
    (function (FieldType) {
        FieldType[FieldType["Text"] = 0] = "Text";
        FieldType[FieldType["TextAreaField"] = 1] = "TextAreaField";
        FieldType[FieldType["DateField"] = 2] = "DateField";
        FieldType[FieldType["EmailField"] = 3] = "EmailField";
        FieldType[FieldType["SelectField"] = 4] = "SelectField";
        FieldType[FieldType["CheckboxField"] = 5] = "CheckboxField";
    })(FieldType = App.FieldType || (App.FieldType = {}));
})(App || (App = {}));
var App;
(function (App) {
    class Field {
        constructor(name, label, fieldType) {
            this.name = name;
            this.label = label;
            this.fieldType = fieldType;
        }
        CreateField(field) {
            const newInput = document.createElement('input');
            switch (field.fieldType) {
                case App.FieldType.CheckboxField:
                    newInput.type = 'checkbox';
                case App.FieldType.DateField:
                    newInput.type = 'date';
                case App.FieldType.EmailField:
                    newInput.type = 'email';
                case App.FieldType.Text:
                    newInput.type = 'text';
                case App.FieldType.SelectField:
                    newInput.type = 'select';
            }
            const newLabel = document.createElement('label');
            newLabel.textContent = field.label;
            const finalInput = document.createElement('div');
            finalInput.append(newLabel, newInput);
            return finalInput;
        }
    }
    App.Field = Field;
})(App || (App = {}));
var App;
(function (App) {
    class Form {
        constructor(fieldList) {
            this.fieldList = fieldList;
        }
        createForm() {
            const newForm = document.createElement("form");
            for (const fieldItem of this.fieldList)
                newForm.appendChild(fieldItem);
            const submitButton = document.createElement('button');
            submitButton.innerHTML = 'Potwierdz';
            newForm.append(submitButton);
            return newForm;
        }
    }
    App.Form = Form;
})(App || (App = {}));
var App;
(function (App) {
    const field = new App.Field("Imie", "Imie: ", App.FieldType.Text);
    const field1 = new App.Field("Emial", "Emial: ", App.FieldType.EmailField);
    var formDiv = field.CreateField(field);
    var formdiv1 = field.CreateField(field1);
    var finalform = [formDiv, formdiv1];
    const form = new App.Form(finalform);
    const elo = document.getElementById('try');
    elo.append(form.createForm());
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map