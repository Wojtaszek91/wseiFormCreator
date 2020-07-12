export class CheckboxField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("input");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.fieldType.type = 'checkbox';
        this.fieldType.className = 'form-control';
        this.label = labelField;
    }
    GetValue() {
        return this.fieldType.checked.toString();
    }
    SetDefaultValue(value) {
        this.fieldType.checked = (value == 'true');
    }
    Render(hostingElement) {
        hostingElement.appendChild(this.fieldType);
    }
    GetField() {
        return this.fieldType;
    }
}
//# sourceMappingURL=CheckboxField.js.map