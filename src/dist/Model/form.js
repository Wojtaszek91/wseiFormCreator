import { LocStorage } from "../LocStorage.js";
export class Form {
    constructor(fieldInputs) {
        this.fieldInputs = new Array();
        this.storage = new LocStorage();
        this.fieldInputs = fieldInputs;
        this.form = document.createElement("form");
        fieldInputs.forEach((element) => {
            let newDiv = document.createElement('div');
            element.label.RenderLabel(newDiv);
            element.Render(newDiv);
            this.form.appendChild(newDiv);
        });
    }
    Render(divElement) {
        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        let values = this.GetValue();
        saveButton.addEventListener('click', () => this.storage.SaveDocument(values));
        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => window.location.assign("/index.html"));
        divElement.appendChild(saveButton);
        divElement.appendChild(cancelButton);
        divElement.appendChild(this.form);
    }
    GetValue() {
        let values = [];
        let newDiv = document.createElement('div');
        for (let field of this.fieldInputs) {
            values.push(field.GetValue());
            let newP = document.createElement('p');
            newP.innerHTML = field.GetValue();
            newDiv.appendChild(newP);
        }
        return values;
    }
}
//# sourceMappingURL=form.js.map