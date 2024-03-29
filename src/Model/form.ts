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

    
    constructor(fieldInputs: Array<CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>, formId: string) {
        this.fieldInputs = fieldInputs;
        this.form = document.createElement("form");
        this.form.id = formId;
        fieldInputs.forEach((element: CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField) => {
          let newDiv = document.createElement('div');
          newDiv.className = 'form-group'
          element.label.RenderLabel(newDiv);
          element.Render(newDiv);
          this.form.appendChild(newDiv);
        });
        
    }

    Render(divElement: HTMLDivElement, isNewForm: boolean, docId?: string) {
      let saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      saveButton.className = 'btn-success'
      saveButton.id = 'saveBtn';
      if(isNewForm){
        if(!docId == undefined){
      saveButton.addEventListener('click', ()=>
      this.storage.SaveDocument(this.GetValue(), this.form.id)
      );
      } else{
        saveButton.addEventListener('click', () => 
        this.storage.SaveDocument(this.GetValue(), this.form.id, docId))
        }
      }
     
      let cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.id = 'cancelBtn';
      cancelButton.className = 'btn-danger'
      cancelButton.addEventListener('click', ()=>
      window.location.assign("/index.html")
      );
      divElement.appendChild(this.form);
      divElement.appendChild(saveButton);
      divElement.appendChild(cancelButton);
    }

    SetDefault(defaultValues: string[]){
      for(let i = 0; i < defaultValues.length; i++){
        this.fieldInputs[i].SetDefaultValue(defaultValues[i]);
      }
    }
    GetValue(): any[]{
      let values = [];
      for (let field of this.fieldInputs){
        values.push(field.GetValue());      
      }
      return values;
    }
  }

