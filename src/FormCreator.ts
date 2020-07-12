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
  public static formValues = new Array<any[]>();
  public inputsArray = new Array< CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>();

    CreateNewForm(frmValues: Array<any[]>, formId: string): Form {
      frmValues.forEach((e)=>{
      switch (e[1]) {
        case '0':
            let labelCheck = new FieldLabel(e[0], e[2]);
            let inputCheck = new CheckboxField(e[2],labelCheck);
            inputCheck.SetDefaultValue(e[3]);
            this.inputsArray.push(inputCheck);
          break;
        case '1':
            let labelDate = new FieldLabel(e[0], e[2]);
            let inputDate = new DateField(e[2],labelDate);
            inputDate.SetDefaultValue(e[3]);
            this.inputsArray.push(inputDate);
          break;
        case '2':
            let labelEmail = new FieldLabel(e[0], e[2]);
            let inputEmail = new EmailField(e[2],labelEmail);
            inputEmail.SetDefaultValue(e[3]);
            this.inputsArray.push(inputEmail);
          break;
        case '3':
            let labelInput = new FieldLabel(e[0], e[2]);
            let inputText = new InputField(e[2],labelInput);
            inputText.SetDefaultValue(e[3]);
            this.inputsArray.push(inputText);
          break;
        case '4':
            let labelSelect = new FieldLabel(e[0], e[2]);
            let inputSelect = new SelectField(e[2],labelSelect,e[4]);
            inputSelect.SetDefaultValue(e[3]);
            this.inputsArray.push(inputSelect);
            break;
        case '5':
            let labelArea = new FieldLabel(e[0], e[2]);
            let inputArea = new TextAreaField(e[2],labelArea);
            inputArea.SetDefaultValue(e[3]);
            this.inputsArray.push(inputArea);
            break;
      }
      })

      let newForm = new Form(this.inputsArray,formId);

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

      let createInputForm = new Form([nameInput,typeInput,idOfField],'creatingForm');

      let finishBtn = document.createElement('button');
      finishBtn.className = 'btn-primary'
      finishBtn.innerHTML = 'Finish';
      finishBtn.addEventListener('click', () => {
        this.SaveForm(FormCreator.formValues);
        window.location.assign("/index.html");
      } );

      createInputForm.Render(hostingDiv, false);
      
      let inputsSaveBtn = document.createElement('button');
      inputsSaveBtn.textContent = 'Save default values';
      inputsSaveBtn.className = 'btn-secondary'
      inputsSaveBtn.addEventListener('click', this.SaveDefaults);
      hostingDiv.appendChild(inputsSaveBtn);

      hostingDiv.appendChild(finishBtn);

      let saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;
      saveBtn.addEventListener('click', () => {
       this.AddField(createInputForm.GetValue(),true);
      });

    }

    SaveDefaults(){
      FormCreator.formValues.forEach((e) => {
        switch(e[1]){
          case '0':
            let inputWithValue = document.getElementById(e[2]) as HTMLInputElement;
            let valueCheckbox = inputWithValue.checked;
            e[3] = valueCheckbox.toString();
            break;
          case '1':
            let dateInput = document.getElementById(e[2]) as HTMLInputElement;
            e[3] = dateInput.value;
            break;
          case '2':
            let emailField = document.getElementById(e[2]) as HTMLInputElement;
            e[3] = emailField.value;
            break;
          case '3':
            let input = document.getElementById(e[2]) as HTMLInputElement;
            e[3] = input.value;
            break;
          case '4':
            let selectField = document.getElementById(e[2]) as HTMLSelectElement;
            const index = selectField.selectedIndex;
            e[3] = index;
            let optionsArray = new Array<string>();
            for(let i = 0; i < selectField.options.length; i++){
                optionsArray.push(selectField.options[i].value);
            }
            e[4] = optionsArray; 
            break;
          case '5':
            let textAreaField = document.getElementById(e[2]) as HTMLTextAreaElement;
            e[3] = textAreaField.value;
            break;
        }
      })

    }

    AddSelectOptionMenu(hostingDiv: HTMLDivElement, selectFieldId: string): HTMLDivElement{
      let optionInputLabel = new FieldLabel('Add option ',selectFieldId+1);
      let optionInput = new InputField(selectFieldId+1,optionInputLabel);
      let addBtn = document.createElement('button');
      addBtn.className = 'btn-success'
      addBtn.innerHTML = 'Add';
      addBtn.addEventListener('click', () => {
        this.RenderOptionSelect(optionInput.GetValue(),selectFieldId)
      });
      optionInputLabel.RenderLabel(hostingDiv);
      optionInput.Render(hostingDiv);
      hostingDiv.appendChild(addBtn);

      return hostingDiv;
    }

    RenderOptionSelect(optionValue: string, selectInputId: string){
      let selectField = document.getElementById(selectInputId) as HTMLSelectElement;
      let optionEl = document.createElement("option") as HTMLOptionElement;
      optionEl.text = optionValue;
      selectField.add(optionEl);
    }

    AddField(values: string[], renderValues: boolean){
      FormCreator.formValues.push(values);
      if(renderValues){
        let p = document.createElement('div');
        const label = new FieldLabel(values[0],values[2]);
        switch(values[1]){
          case '0':
            const checkField = new CheckboxField(values[2],label);
            checkField.Render(p);
            break;
          case '1':
            const dateField = new DateField(values[2],label);
            dateField.Render(p);
            break;
          case '2':
            const emailField = new EmailField(values[2],label);
            emailField.Render(p);
            break;
          case '3':
            const input = new InputField(values[2],label);
            input.Render(p);
            break;
          case '4':
            let selectField = new SelectField(values[2],label,[]);
            selectField.Render(p);
            this.AddSelectOptionMenu(p,values[2]);
            break;
          case '5':
            const textAreaField = new TextAreaField(values[2],label);
            textAreaField.Render(p);
            break;
        }
      
      let div = document.getElementById('inputs') as HTMLDivElement;
      label.RenderLabel(div);
      div.appendChild(p);
    }}
    

    RenderTableWithForms(hostingDivElement: string){
      const localStorage = new LocStorage();
      const fromsIds = localStorage.GetForms() as string[];

      let tableWithForms = document.createElement('table');
      tableWithForms.className = 'table table-striped';
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