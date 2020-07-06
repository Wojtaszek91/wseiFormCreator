export class Form {
    constructor(fieldInputs) {
        this.fieldInputs = new Array();
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
        return newDiv;
    }
}
//# sourceMappingURL=form.js.map