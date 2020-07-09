import { IFieldType } from "../Interfaces/IFieldtype.js";
import { FieldLabel } from "./FieldLabel.js";
import { FieldType} from "../Enum/FieldType.js";

export class TextAreaField implements IFieldType{
        label: FieldLabel;
        fieldType: HTMLTextAreaElement;
        constructor(idOfField: string,labelField: FieldLabel){
            this.fieldType = document.createElement(FieldType.TextAreaField) as HTMLTextAreaElement;
            this.fieldType.id = idOfField;
            this.fieldType.name = idOfField;
            this.label = labelField;
            this.fieldType.value = "textArea";
            
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
