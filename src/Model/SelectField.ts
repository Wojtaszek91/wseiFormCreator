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
           let selectedOption = this.fieldType.options[this.fieldType.selectedIndex];
           return selectedOption.innerText;

        }
        Render(hostingElement: HTMLDivElement){
            hostingElement.appendChild(this.fieldType);
        }
        SetDefaultValue(value: string){
          this.fieldType.selectedOptions[parseInt(value)].selected;
      }

             setOptions(
      optionsStringList: string[],
      selectField: HTMLSelectElement
    ) {
      for (const option of optionsStringList) {
        var optionEl = document.createElement("option") as HTMLOptionElement;
        optionEl.text = option;
        selectField.add(optionEl);
      }
    }
    GetField(): any{
      return this.fieldType;
  }
    }
