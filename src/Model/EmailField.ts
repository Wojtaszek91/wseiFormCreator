import { IFieldType } from "../Interfaces/IFieldtype.js";
import { FieldLabel } from "./FieldLabel.js";
import { FieldType} from "../Enum/FieldType.js";

export class EmailField implements IFieldType{
        label: FieldLabel;
        fieldType: HTMLInputElement;
        constructor(idOfField: string,labelField: FieldLabel){
            this.fieldType = document.createElement(FieldType.Input);
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
        Render(hostingElement: HTMLDivElement){
            hostingElement.appendChild(this.fieldType);
        }
    }