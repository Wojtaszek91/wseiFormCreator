import { LocStorage } from "../LocStorage.js";
export class Form {
    constructor(fieldInputs, formId) {
        this.fieldInputs = new Array();
        this.storage = new LocStorage();
        this.fieldInputs = fieldInputs;
        this.form = document.createElement("form");
        this.form.id = formId;
        fieldInputs.forEach((element) => {
            let newDiv = document.createElement('div');
            element.label.RenderLabel(newDiv);
            element.Render(newDiv);
            this.form.appendChild(newDiv);
        });
    }
    Render(divElement, isNewForm, docId) {
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.className = 'btn-success';
        saveButton.id = 'saveBtn';
        if (isNewForm) {
            if (!docId == undefined) {
                saveButton.addEventListener('click', () => this.storage.SaveDocument(this.GetValue(), this.form.id));
            }
            else {
                saveButton.addEventListener('click', () => this.storage.SaveDocument(this.GetValue(), this.form.id, docId));
            }
        }
        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.id = 'cancelBtn';
        cancelButton.className = 'btn-danger';
        cancelButton.addEventListener('click', () => window.location.assign("/index.html"));
        divElement.appendChild(this.form);
        divElement.appendChild(saveButton);
        divElement.appendChild(cancelButton);
    }
    SetDefault(defaultValues) {
        for (let i = 0; i < defaultValues.length; i++) {
            this.fieldInputs[i].SetDefaultValue(defaultValues[i]);
        }
    }
    GetValue() {
        let values = [];
        for (let field of this.fieldInputs) {
            values.push(field.GetValue());
        }
        return values;
    }
}
//# sourceMappingURL=form.js.map