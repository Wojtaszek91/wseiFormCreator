import { CheckboxField } from "./CheckboxField.js";
import { EmailField } from "./EmailField.js";
import { InputField } from "./InputField.js";
import { SelectField } from "./SelectField.js";
import { TextAreaField } from "./TextAreaField.js";
import { DateField } from "./DateField.js";
import { LocStorage } from "../LocStorage.js";

  export class Form {
    public fieldInputs = new Array< CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>();
    public form: HTMLFormElement;
    storage = new LocStorage();

    
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
      let saveButton = document.createElement('button');
      saveButton.textContent = 'Zapisz';
      let values = this.GetValue();
      saveButton.addEventListener('click', ()=>
      this.storage.SaveDocument(values)
     );
      
      let cancelButton = document.createElement('button');
      cancelButton.textContent = 'Anuluj';
      cancelButton.addEventListener('click', ()=>
      window.location.assign("/index.html")
      );
      divElement.appendChild(this.form);
      divElement.appendChild(saveButton);
      divElement.appendChild(cancelButton);
    }

    GetValue(): any[]{
      let values = [];
      let newDiv = document.createElement('div');
      for (let field of this.fieldInputs){
        values.push(field.GetValue());
        let newP = document.createElement('p');
        newP.innerHTML = field.GetValue()
        newDiv.appendChild(newP);
      }
      return values;
    }
  }

