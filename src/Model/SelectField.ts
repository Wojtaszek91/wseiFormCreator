import { IFieldType } from "../Interfaces/IFieldtype.js";
import { FieldLabel } from "./FieldLabel.js";
import { FieldType} from "../Enum/FieldType.js";

export class SelectField implements IFieldType{
        label: FieldLabel;
        fieldType: HTMLSelectElement;
        constructor(idOfField: string,labelField: FieldLabel, selectOptions: string[]){
            this.fieldType = document.createElement(FieldType.SelectField) as HTMLSelectElement;
            this.fieldType.id = idOfField;
            this.fieldType.name = idOfField;
            this.label = labelField;
            this.setOptions(selectOptions, this.fieldType);

            
        }
        GetValue() {
          return this.fieldType.selectedIndex.toString();
        }


        Render(hostingElement: HTMLDivElement){
            hostingElement.appendChild(this.fieldType);
        }
        SetDefaultValue(value: string){
          this.fieldType.selectedIndex = parseInt(value);
      }

             setOptions(
      optionsStringList: string[],
      selectField: HTMLSelectElement
    ) {
      for (const option of optionsStringList) {
        let optionEl = document.createElement("option") as HTMLOptionElement;
        optionEl.text = option;
        selectField.add(optionEl);
      }
    }
    GetField(): any{
      return this.fieldType;
  }
    }
