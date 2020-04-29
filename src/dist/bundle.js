"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    let FieldType;
    (function (FieldType) {
        FieldType["Text"] = "Text";
        FieldType["TextAreaField"] = "TextArea";
        FieldType["DateField"] = "Date";
        FieldType["EmailField"] = "Email";
        FieldType["SelectField"] = "Selected";
        FieldType["CheckboxField"] = "Checkbox";
    })(FieldType = App.FieldType || (App.FieldType = {}));
})(App || (App = {}));
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
var App;
(function (App) {
    class Component {
        constructor(templateId, hostedElId, insertAtStart, newElementId) {
            this.templateElement = document.getElementById(templateId);
            this.hostedElement = document.getElementById(hostedElId);
            const importNode = document.importNode(this.templateElement.content, true);
            this.element = importNode.firstElementChild;
            if (newElementId)
                this.element.id = newElementId;
            this.attach(insertAtStart);
        }
        attach(insertAtBeggining) {
            this.hostedElement.insertAdjacentElement(insertAtBeggining ? "afterbegin" : "beforeend", this.element);
        }
    }
    App.Component = Component;
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
        CreateField() {
            const newInput = document.createElement("input");
            const finalInput = document.createElement("div");
            finalInput.className = "form-control";
            switch (this.fieldType) {
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
                    newInput.value = 'elo';
                    break;
                case App.FieldType.SelectField:
                    const selectField = this.createSelectedElWithOptions(this.selectOptions);
                    selectField.id = this.name;
                    finalInput.append(this.createLabel(this.label), selectField);
                    finalInput.id = this.name;
                    return finalInput;
                case App.FieldType.TextAreaField:
                    const textArea = document.createElement("textarea");
                    textArea.id = this.name;
                    finalInput.append(this.createLabel(this.label), textArea);
                    return finalInput;
            }
            const newLabel = this.createLabel(this.label);
            newInput.id = this.name;
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
                var optionEl = document.createElement("option");
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
    class Form extends App.Component {
        constructor(id, fieldInputs) {
            super("template-form", "render", false);
            this.fieldIdList = [];
            this.id = id;
            this.fieldInputs = fieldInputs;
        }
        createForm() {
            const newForm = document.createElement("form");
            newForm.append(...this.fieldInputs);
            const submitButton = document.createElement("button");
            submitButton.innerHTML = "Dodaj";
            submitButton.type = "submit";
            submitButton.addEventListener("submit", this.SubmitHandler);
            newForm.append(submitButton);
            newForm.id = '10';
            return newForm;
        }
        configurate() { }
        renderContent() {
            this.element.append(this.createForm());
        }
        SubmitHandler(event) {
            event.preventDefault();
        }
    }
    __decorate([
        App.autoBind
    ], Form.prototype, "SubmitHandler", null);
    App.Form = Form;
})(App || (App = {}));
var App;
(function (App) {
    class FieldsList extends App.Component {
        constructor() {
            super("form-list", "fields", false);
            this.fieldsList = [];
            this.htmlElementsList = [];
        }
        manipulateFields(field, add) {
            if (add) {
                this.fieldsList.push(field);
                this.htmlElementsList.push(field.CreateField());
            }
            else {
                this.fieldsList.filter((item) => item.name === field.name);
                this.htmlElementsList.filter(item => item.id === field.name);
            }
            this.renderContent();
        }
        configurate() { }
        renderContent() {
            this.element.querySelector("header").innerHTML = "Lista dodanych pol";
            const ulList = this.element.querySelector("ul");
            ulList.innerHTML = "";
            for (const fieldEl of this.fieldsList) {
                let newLiEl = document.createElement("li");
                newLiEl.innerHTML = `Label: "${fieldEl.label}" <br> Field type: "${fieldEl.fieldType}"`;
                ulList.appendChild(newLiEl);
            }
        }
    }
    App.FieldsList = FieldsList;
})(App || (App = {}));
var App;
(function (App) {
    class FormControl {
        constructor(form) {
            this.form = form;
            this.inputsList = [];
        }
        gatherInputElements() {
            const elements = this.form.elements;
            for (const control of elements) {
                const el = control;
                this.inputsList.push(el);
            }
            this.renderValues();
        }
        renderValues() {
            const el = document.getElementById("values");
            let newEl = document.createElement("p");
            for (const inputel of this.inputsList) {
                if (inputel instanceof HTMLInputElement) {
                    const pElement = document.createElement("p");
                    pElement.innerHTML = `Label: "${inputel.labels[0].innerHTML}" <br> Typ pola: "${inputel.type}" <br> Wartosc pola: "${inputel.value}"`;
                    el.append(pElement);
                }
                if (inputel instanceof HTMLTextAreaElement ||
                    inputel instanceof HTMLSelectElement) {
                    const labeltxt = this.findLabel(inputel.id);
                    newEl.innerHTML = `Label: "${labeltxt.textContent}" <br> Typ pola: ${inputel.type} <br> Wartosc pola: ${inputel.value}`;
                    el.append(newEl);
                }
            }
        }
        findLabel(id) {
            const labels = document.getElementsByTagName('LABEL');
            let labelOutput = document.createElement('label');
            for (var i = 0; i < labels.length; i++) {
                let labelOutput = labels[i];
                if (labelOutput.htmlFor == id) {
                    return labelOutput;
                }
            }
            return labelOutput;
        }
    }
    App.FormControl = FormControl;
})(App || (App = {}));
var App;
(function (App) {
    const fieldsList = new App.FieldsList();
    const options = ['text', 'email', 'textarea', 'date', 'select', 'checkbox'];
    fieldsList.manipulateFields(new App.Field('1', "Typ pola: ", App.FieldType.SelectField, options), true);
    fieldsList.manipulateFields(new App.Field('2', "Opis: ", App.FieldType.Text), true);
    const form = new App.Form('form', fieldsList.htmlElementsList);
    form.renderContent();
    const controlForm = new App.FormControl(document.getElementById('10'));
    controlForm.gatherInputElements();
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map