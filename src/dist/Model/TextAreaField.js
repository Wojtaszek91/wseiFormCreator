export class TextAreaField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("TEXTAREA");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.label = labelField;
        this.fieldType.value = "textArea";
    }
    GetValue() {
        return this.fieldType.value;
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
}
//# sourceMappingURL=TextAreaField.js.map