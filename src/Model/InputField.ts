import { IFieldType } from "../Interfaces/IFieldtype.js";
import { FieldLabel } from "./FieldLabel.js";
import { FieldType} from "../Enum/FieldType.js";

export class InputField implements IFieldType{
        label: FieldLabel;
        fieldType: HTMLInputElement;
        constructor(idOfField: string,labelField: FieldLabel){
            this.fieldType = document.createElement(FieldType.Input);
            this.fieldType.id = idOfField;
            this.fieldType.name = idOfField;
            this.label = labelField;
            this.fieldType.className = 'form-control';
            
        }
        GetValue() {
           return this.fieldType.value;
        }
        SetDefaultValue(value: string){
            this.fieldType.defaultValue = value;
        }
        Render(hostingElement: HTMLDivElement){
            hostingElement.appendChild(this.fieldType);
        }
        GetField(): any{
            return this.fieldType;
        }
    }
