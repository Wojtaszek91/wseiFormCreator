"use strict";
define("Interfaces/IDataStorage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("LocStorage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class LocStorage {
        SaveDocument(document) {
            const newDocumentId = 'Document-'.concat(Date.now().toString());
            localStorage.setItem(newDocumentId, JSON.stringify(document));
            let docsIds = localStorage.getItem('DocumentsIds');
            if (docsIds === null) {
                let docsIds = new Array();
                docsIds.push(newDocumentId);
                localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
            }
            else {
                let docsIds = JSON.parse(localStorage.getItem('DocumentsIds'));
                docsIds.push(newDocumentId);
                localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
            }
            return newDocumentId;
        }
        LoadDocument(Id) {
            let documentFromStorage = localStorage.getItem(Id);
            if (documentFromStorage != null) {
                return JSON.parse(documentFromStorage);
            }
        }
        GetDocuments() {
            let documentsIds = new Array();
            for (let i = 0; i < localStorage.length; i++) {
                documentsIds.push(localStorage.key(i));
            }
            return documentsIds;
        }
    }
    exports.LocStorage = LocStorage;
});
define("DocumentsList", ["require", "exports", "LocStorage"], function (require, exports, LocStorage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DocumentList {
        constructor() {
            this.ListOfDocsIds = this.getDocumentList();
        }
        getDocumentList() {
            let locStor = new LocStorage_1.LocStorage();
            return locStor.GetDocuments();
        }
        Render(containerId) {
            var _a;
            let tableWithDocsIds = document.createElement('table');
            let dataArray = new Array();
            dataArray.push('Documents Id');
            this.GenerateTableHead(tableWithDocsIds, dataArray);
            this.GenerateTable(tableWithDocsIds, this.ListOfDocsIds);
            (_a = document.getElementById(containerId)) === null || _a === void 0 ? void 0 : _a.appendChild(tableWithDocsIds);
        }
        GenerateTableHead(table, headersData) {
            let thead = table.createTHead();
            let row = thead.insertRow();
            for (let key of headersData) {
                let th = document.createElement("th");
                let text = document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
            }
        }
        GenerateTable(table, rowsData) {
            for (let element of rowsData) {
                let row = table.insertRow();
                for (let key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.appendChild(text);
                }
            }
        }
    }
    exports.DocumentList = DocumentList;
});
define("Model/FieldLabel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FieldLabel {
        constructor(labelText, labelFor) {
            this.label = document.createElement('label');
            this.SetHtmlFor(labelFor);
            this.SetTextContent(labelText);
        }
        GetValue() {
            return this.label.textContent;
        }
        RenderLabel(divElement) {
            divElement.appendChild(this.label);
        }
        SetHtmlFor(htmlFor) {
            this.label.htmlFor = htmlFor;
        }
        SetTextContent(labelText) {
            this.label.textContent = labelText;
        }
    }
    exports.FieldLabel = FieldLabel;
});
define("Interfaces/IFieldtype", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Enum/FieldType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Model/InputField", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputField {
        constructor(idOfField, labelField) {
            this.fieldId = idOfField;
            this.label = labelField;
            this.fieldType = document.createElement("input");
        }
        GetValue() {
            return this.fieldType.value;
        }
        Render(hostingElement) {
            hostingElement.appendChild(this.fieldType);
        }
    }
    exports.InputField = InputField;
});
define("app", ["require", "exports", "Model/FieldLabel", "Model/InputField"], function (require, exports, FieldLabel_js_1, InputField_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let div = document.createElement("div");
    let label = new FieldLabel_js_1.FieldLabel("Opis labelka", "InputId");
    label.RenderLabel(div);
    let temp = document.getElementById('try');
    let inputField = new InputField_js_1.InputField('id', label);
    inputField.Render(temp);
    temp.appendChild(div);
});
var App;
(function (App) {
    class Form {
        constructor(id, fieldInputs) {
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
            newForm.append(submitButton);
            newForm.id = '10';
            return newForm;
        }
        configurate() { }
        renderContent() {
        }
    }
    App.Form = Form;
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
            for (const inputEl of this.inputsList) {
                if (inputEl instanceof HTMLInputElement) {
                    const pElement = document.createElement("p");
                    pElement.innerHTML = `Label: "${inputEl.labels[0].innerHTML}" <br> Typ pola: "${inputEl.type}" <br> Wartosc pola: "${inputEl.value}"`;
                    el.append(pElement);
                }
                if (inputEl instanceof HTMLTextAreaElement ||
                    inputEl instanceof HTMLSelectElement) {
                    const labeltxt = this.findLabel(inputEl.id);
                    newEl.innerHTML = `Label: "${labeltxt.textContent}" <br> Typ pola: ${inputEl.type} <br> Wartosc pola: ${inputEl.value}`;
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
//# sourceMappingURL=bundle.js.map