export class CheckboxField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("input");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.fieldType.type = 'checkbox';
        this.label = labelField;
    }
    GetValue() {
        return this.fieldType.checked.toString();
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
}
//# sourceMappingURL=CheckboxField.js.map