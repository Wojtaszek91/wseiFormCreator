    export class FieldLabel {
        public label: HTMLLabelElement;

            constructor(labelText :string, labelFor :string){
                this.label = document.createElement('label');
                this.SetHtmlFor(labelFor);
                this.SetTextContent(labelText);
        }
        GetValue(){
            return this.label.textContent;
        }
        RenderLabel(divElement: HTMLDivElement){
            divElement.appendChild(this.label);
        }
        SetHtmlFor(htmlFor :string){
            this.label.htmlFor = htmlFor;
        }
        SetTextContent(labelText :string){
            this.label.textContent = labelText;
        }
    }
