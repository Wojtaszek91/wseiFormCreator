export class InputField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("input");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.label = labelField;
        this.fieldType.value = "inputField";
    }
    GetValue() {
        return this.fieldType.value;
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
}
//# sourceMappingURL=InputField.js.map