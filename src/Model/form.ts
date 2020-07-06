import { CheckboxField } from "./CheckboxField";
import { EmailField } from "./EmailField";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { DateField } from "./DateField";

  export class Form {
    public fieldInputs = new Array< CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>();
    public form: HTMLFormElement;

    
    constructor(fieldInputs: Array<CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>) {
        this.fieldInputs = fieldInputs;
        this.form = document.createElement("form");
        fieldInputs.forEach((element: CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField) => {
          let newDiv = document.createElement('div');
          element.label.RenderLabel(newDiv);
          element.Render(newDiv);
          this.form.appendChild(newDiv);
        });
        
    }

    Render(divElement: HTMLDivElement) {
      divElement.appendChild(this.form);
    }

    GetValue(): HTMLDivElement{
      let values = [];
      let newDiv = document.createElement('div');
      for (let field of this.fieldInputs){
        values.push(field.GetValue());
        let newP = document.createElement('p');
        newP.innerHTML = field.GetValue()
        newDiv.appendChild(newP);
      }
      return newDiv;
    }
  }

