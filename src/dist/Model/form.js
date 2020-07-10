import { LocStorage } from "../LocStorage.js";
export class Form {
    constructor(fieldInputs, id) {
        this.fieldInputs = new Array();
        this.storage = new LocStorage();
        this.fieldInputs = fieldInputs;
        this.form = document.createElement("form");
        this.form.id = id;
        fieldInputs.forEach((element) => {
            let newDiv = document.createElement('div');
            element.label.RenderLabel(newDiv);
            element.Render(newDiv);
            this.form.appendChild(newDiv);
        });
    }
    Render(divElement, isNewForm) {
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.id = 'saveBtn';
        if (isNewForm)
            saveButton.addEventListener('click', () => this.storage.SaveDocument(this.GetValue(), this.form.id));
        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.id = 'cancelBtn';
        cancelButton.addEventListener('click', () => window.location.assign("/index.html"));
        divElement.appendChild(this.form);
        divElement.appendChild(saveButton);
        divElement.appendChild(cancelButton);
    }
    SetDefault(defaultValues) {
        console.log(defaultValues);
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