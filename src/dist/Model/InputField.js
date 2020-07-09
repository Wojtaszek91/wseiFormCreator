export class InputField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("input");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.label = labelField;
    }
    GetValue() {
        return this.fieldType.value;
    }
    SetDefaultValue(value) {
        let field = document.getElementById(this.fieldType.id);
        return field === null || field === void 0 ? void 0 : field.nodeValue;
        this.fieldType.defaultValue = value;
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
    GetField() {
        return this.fieldType;
    }
}
//# sourceMappingURL=InputField.js.map