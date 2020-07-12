export class SelectField {
    constructor(idOfField, labelField, selectOptions) {
        this.fieldType = document.createElement("select");
        this.fieldType.id = idOfField;
        this.fieldType.className = 'form-control';
        this.fieldType.style.width = '40%';
        this.fieldType.name = idOfField;
        this.label = labelField;
        this.setOptions(selectOptions, this.fieldType);
    }
    GetValue() {
        return this.fieldType.selectedIndex.toString();
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
    SetDefaultValue(value) {
        this.fieldType.selectedIndex = parseInt(value);
    }
    setOptions(optionsStringList, selectField) {
        for (const option of optionsStringList) {
            let optionEl = document.createElement("option");
            optionEl.text = option;
            selectField.add(optionEl);
        }
    }
    GetField() {
        return this.fieldType;
    }
}
//# sourceMappingURL=SelectField.js.map