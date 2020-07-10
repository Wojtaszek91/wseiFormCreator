import { CheckboxField } from ".//Model/CheckboxField.js";
import { DateField } from ".//Model/DateField.js";
import { EmailField } from ".//Model/EmailField.js";
import { InputField } from ".//Model/InputField.js";
import { SelectField } from ".//Model/SelectField.js";
import { TextAreaField } from ".//Model/TextAreaField.js";
import { FieldType } from "./Enum/FieldType.js";
import { FieldLabel } from "./Model/FieldLabel.js";
import { LocStorage } from "./LocStorage.js";
import { Form } from "./Model/form.js";

export class FormCreator {
  public formValues = new Array<any[]>();
  public inputsArray = new Array< CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>();

    CreateNewForm(frmValues: Array<any[]>, id: string): Form {
      frmValues.forEach((e)=>{
      switch (e[1]) {
        case FieldType.CheckboxField.toString():
            let labelCheck = new FieldLabel(e[0], e[2]);
            let inputCheck = new CheckboxField(e[2],labelCheck);
            inputCheck.SetDefaultValue(e[3]);
            this.inputsArray.push(inputCheck);
          break;
        case FieldType.Date.toString():
            let labelDate = new FieldLabel(e[0], e[2]);
            let inputDate = new DateField(e[2],labelDate);
            inputDate.SetDefaultValue(e[3]);
            this.inputsArray.push(inputDate);
          break;
        case FieldType.EmailField.toString():
            let labelEmail = new FieldLabel(e[0], e[2]);
            let inputEmail = new EmailField(e[2],labelEmail);
            inputEmail.SetDefaultValue(e[3]);
            this.inputsArray.push(inputEmail);
          break;
        case 'input':
            let labelInput = new FieldLabel(e[0], e[2]);
            let inputText = new InputField(e[2],labelInput);
            inputText.SetDefaultValue(e[3]);
            this.inputsArray.push(inputText);
          break;
        case FieldType.SelectField.toString():
            let labelSelect = new FieldLabel(e[0], e[2]);
            let inputSelect = new SelectField(e[2],labelSelect,e[4]);
            inputSelect.SetDefaultValue(e[3]);
            this.inputsArray.push(inputSelect);
            break;
        case FieldType.TextAreaField.toString():
            let labelArea = new FieldLabel(e[0], e[2]);
            let inputArea = new TextAreaField(e[2],labelArea);
            inputArea.SetDefaultValue(e[3]);
            this.inputsArray.push(inputArea);
            break;
      }
      })

      let newForm = new Form(this.inputsArray,id);

      return newForm;
    }

    FormCreatorMenu(hostingDiv : HTMLDivElement){
      let nameLabel = new FieldLabel('Question ', 'nameId');
      let nameInput = new InputField('nameId', nameLabel);

      let typeLabel = new FieldLabel('Type ', 'typeId');
      let selectOptions = [FieldType.CheckboxField.toString(),
      FieldType.Date.toString(),
      FieldType.EmailField.toString(),
      FieldType.Input.toString(),
      FieldType.SelectField.toString(),
      FieldType.TextAreaField.toString()];
      let typeInput = new SelectField('typeId', typeLabel,selectOptions);

      let idOfFieldLabel = new FieldLabel('Id of field ','fieldId');
      let idOfField = new InputField('fieldId', idOfFieldLabel);

      let defaultValueLabel = new FieldLabel('Default value ', 'defaultId');
      let defaultValueInput = new InputField('defaultId',defaultValueLabel);

      let createInputForm = new Form([nameInput,typeInput,idOfField, defaultValueInput],'creatingForm');

      let finishBtn = document.createElement('button');
      finishBtn.innerHTML = 'Finish';
      finishBtn.addEventListener('click', () => {
        this.SaveForm(this.formValues)
      } );

      createInputForm.Render(hostingDiv, false);
      hostingDiv.appendChild(finishBtn);

      let saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;
      saveBtn.addEventListener('click', () => {
       this.AddField(createInputForm.GetValue(),true);
      });

    }

    AddField(values: string[], renderValues: boolean){
      this.formValues.push(values);
      if(renderValues){
      let p = document.createElement('p');
      values.forEach((e) => {
        p.innerHTML = p.innerHTML + " " + e;
      })
      let div = document.getElementById('inputs');
      div?.appendChild(p);
      console.log(this.formValues);
    }
    }

    RenderTableWithForms(hostingDivElement: string){
      const localStorage = new LocStorage();
      const fromsIds = localStorage.GetForms() as string[];

      let tableWithForms = document.createElement('table');
      let dataArray = new Array();
      dataArray.push('Forms Id');

      this.GenerateTableHead(tableWithForms, dataArray);
      this.GenerateTableBody(tableWithForms, fromsIds);
      document.getElementById(hostingDivElement)?.appendChild(tableWithForms);
    }

    GenerateTableHead(table : HTMLTableElement, headersData : any[]) {
      let thead = table.createTHead();
      let row = thead.insertRow();
      for (let key of headersData) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }
    
    GenerateTableBody(table: HTMLTableElement, docData: string[]) {
      let tbody = document.createElement('tbody');

      for (let i = 0 ; i<docData.length; i++) {
          let row = tbody.insertRow();

          let cellFormsIds = row.insertCell();
          let formIdLink = document.createElement("a");
          formIdLink.setAttribute("href", "new-documents.html?formId=".concat(docData[i]));
          let EditLinkText = document.createTextNode(docData[i]);
          formIdLink.appendChild(EditLinkText);
          cellFormsIds.appendChild(formIdLink);
      }
      table.appendChild(tbody);
    }
    
    SaveForm(values: any[]){
        let localStorage = new LocStorage();
        localStorage.SaveForm(values);
    }
}