export class EmailField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("input");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.fieldType.type = 'email';
        this.fieldType.placeholder = 'example@example.com';
        this.fieldType.defaultValue = 'example@example.com';
        this.label = labelField;
    }
    GetValue() {
        return this.fieldType.value;
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
}
//# sourceMappingURL=EmailField.js.map