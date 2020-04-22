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
        constructor(name, label, fieldType, selectOptions) {
            this.name = name;
            this.label = label;
            this.fieldType = fieldType;
            this.selectOptions = selectOptions;
        }
        CreateField(field) {
            const newInput = document.createElement("input");
            const finalInput = document.createElement("div");
            switch (field.fieldType) {
                case App.FieldType.CheckboxField:
                    newInput.type = "checkbox";
                    break;
                case App.FieldType.DateField:
                    newInput.type = "date";
                    break;
                case App.FieldType.EmailField:
                    newInput.type = "email";
                    break;
                case App.FieldType.Text:
                    newInput.type = "text";
                    break;
                case App.FieldType.SelectField:
                    const selectField = this.createSelectedElWithOptions(this.selectOptions);
                    finalInput.append(this.createLabel(field.label), selectField);
                    return finalInput;
                case App.FieldType.TextAreaField:
                    const textArea = document.createElement("textarea");
                    finalInput.append(this.createLabel(field.label), textArea);
                    return finalInput;
            }
            const newLabel = this.createLabel(field.label);
            finalInput.append(newLabel, newInput);
            return finalInput;
        }
        createLabel(labelTxt) {
            const newLabel = document.createElement("label");
            newLabel.textContent = labelTxt;
            newLabel.htmlFor = this.name;
            return newLabel;
        }
        createSelectedElWithOptions(optionsStringList) {
            let selectField = document.createElement("select");
            for (const option of optionsStringList) {
                var optionEl = document.createElement('option');
                optionEl.text = option;
                selectField.add(optionEl);
            }
            return selectField;
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
    const options = ['text', 'email', 'textarea', 'date', 'select', 'checkbox'];
    const field = new App.Field("typ", "Typ pola: ", App.FieldType.SelectField, options);
    var formDiv = field.CreateField(field);
    const field1 = new App.Field("opis", "Opis: ", App.FieldType.Text);
    var formdiv1 = field1.CreateField(field1);
    var finalform = [formdiv1, formDiv];
    const form = new App.Form(finalform);
    const elo = document.getElementById('try');
    elo.append(form.createForm());
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map