export class FieldLabel {
    constructor(labelText, labelFor) {
        this.label = document.createElement('label');
        this.SetHtmlFor(labelFor);
        this.SetTextContent(labelText);
    }
    GetValue() {
        return this.label.textContent;
    }
    RenderLabel(divElement) {
        divElement.appendChild(this.label);
    }
    SetHtmlFor(htmlFor) {
        this.label.htmlFor = htmlFor;
    }
    SetTextContent(labelText) {
        this.label.textContent = labelText;
    }
}
//# sourceMappingURL=FieldLabel.js.map