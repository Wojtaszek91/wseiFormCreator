export class SelectField {
    constructor(idOfField, labelField, selectOptions) {
        this.fieldType = document.createElement("select");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.label = labelField;
        this.setOptions(selectOptions, this.fieldType);
    }
    GetValue() {
        let selectedOption = this.fieldType.options[this.fieldType.selectedIndex];
        return selectedOption.innerText;
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
    SetDefaultValue(value) {
        this.fieldType.selectedOptions[parseInt(value)].selected;
    }
    setOptions(optionsStringList, selectField) {
        for (const option of optionsStringList) {
            var optionEl = document.createElement("option");
            optionEl.text = option;
            selectField.add(optionEl);
        }
    }
    GetField() {
        return this.fieldType;
    }
}
//# sourceMappingURL=SelectField.js.map