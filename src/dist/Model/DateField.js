export class DateField {
    constructor(idOfField, labelField) {
        this.fieldType = document.createElement("input");
        this.fieldType.id = idOfField;
        this.fieldType.name = idOfField;
        this.fieldType.type = 'date';
        this.fieldType.defaultValue = '2015-01-01';
        this.label = labelField;
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
//# sourceMappingURL=DateField.js.map