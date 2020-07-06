import { IFieldType } from "../Interfaces/IFieldtype.js";
import { FieldLabel } from "./FieldLabel.js";
import { FieldType} from "../Enum/FieldType.js";

export class CheckboxField implements IFieldType{
        label: FieldLabel;
        fieldType: HTMLInputElement;
        constructor(idOfField: string,labelField: FieldLabel){
            this.fieldType = document.createElement(FieldType.Input);
            this.fieldType.id = idOfField;
            this.fieldType.name = idOfField;
            this.fieldType.type = 'checkbox';
            this.label = labelField;
            
        }
        GetValue() {
           return this.fieldType.checked.toString();
        }
        Render(hostingElement: HTMLDivElement){
            hostingElement.appendChild(this.fieldType);
        }
    }