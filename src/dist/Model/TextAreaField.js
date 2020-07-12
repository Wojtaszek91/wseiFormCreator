export class TextAreaField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("textarea");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.label = labelField;
        this.fieldType.value = "textArea";
        this.fieldType.className = 'form-control';
    }
    GetValue() {
        return this.fieldType.value;
    }
    SetDefaultValue(value) {
        this.fieldType.defaultValue = value;
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
    GetField() {
        return this.fieldType;
    }
}
//# sourceMappingURL=TextAreaField.js.map