import { CheckboxField } from ".//Model/CheckboxField.js";
import { DateField } from ".//Model/DateField.js";
import { EmailField } from ".//Model/EmailField.js";
import { InputField } from ".//Model/InputField.js";
import { SelectField } from ".//Model/SelectField.js";
import { TextAreaField } from ".//Model/TextAreaField.js";
import { FieldLabel } from "./Model/FieldLabel.js";
import { LocStorage } from "./LocStorage.js";
import { Form } from "./Model/form.js";
export class FormCreator {
    constructor() {
        this.formValues = new Array();
        this.inputsArray = new Array();
    }
    CreateNewForm(frmValues, id) {
        console.log('ok');
        console.log(frmValues[0][0]);
        frmValues.forEach((e) => {
            switch (e[1]) {
                case "checkbox".toString():
                    let labelCheck = new FieldLabel(e[0], e[2]);
                    let inputCheck = new CheckboxField(e[2], labelCheck);
                    inputCheck.SetDefaultValue(e[3]);
                    this.inputsArray.push(inputCheck);
                    break;
                case "date".toString():
                    let labelDate = new FieldLabel(e[0], e[2]);
                    let inputDate = new DateField(e[2], labelDate);
                    inputDate.SetDefaultValue(e[3]);
                    this.inputsArray.push(inputDate);
                    break;
                case "email".toString():
                    let labelEmail = new FieldLabel(e[0], e[2]);
                    let inputEmail = new EmailField(e[2], labelEmail);
                    inputEmail.SetDefaultValue(e[3]);
                    this.inputsArray.push(inputEmail);
                    break;
                case 'input':
                    console.log('input');
                    let labelInput = new FieldLabel(e[0], e[2]);
                    let inputText = new InputField(e[2], labelInput);
                    inputText.SetDefaultValue(e[3]);
                    this.inputsArray.push(inputText);
                    break;
                case "select".toString():
                    let labelSelect = new FieldLabel(e[0], e[2]);
                    let inputSelect = new SelectField(e[2], labelSelect, e[4]);
                    inputSelect.SetDefaultValue(e[3]);
                    this.inputsArray.push(inputSelect);
                    break;
                case "textarea".toString():
                    let labelArea = new FieldLabel(e[0], e[2]);
                    let inputArea = new TextAreaField(e[2], labelArea);
                    inputArea.SetDefaultValue(e[3]);
                    this.inputsArray.push(inputArea);
                    break;
            }
        });
        let newForm = new Form(this.inputsArray, id);
        return newForm;
    }
    FormCreatorMenu(hostingDiv) {
        let nameLabel = new FieldLabel('Question ', 'nameId');
        let nameInput = new InputField('nameId', nameLabel);
        let typeLabel = new FieldLabel('Type ', 'typeId');
        let selectOptions = ["checkbox".toString(),
            "date".toString(),
            "email".toString(),
            "input".toString(),
            "select".toString(),
            "textarea".toString()];
        let typeInput = new SelectField('typeId', typeLabel, selectOptions);
        let idOfFieldLabel = new FieldLabel('Id of field ', 'fieldId');
        let idOfField = new InputField('fieldId', idOfFieldLabel);
        let defaultValueLabel = new FieldLabel('Default value ', 'defaultId');
        let defaultValueInput = new InputField('defaultId', defaultValueLabel);
        let createInputForm = new Form([nameInput, typeInput, idOfField, defaultValueInput], 'creatingForm');
        let finishBtn = document.createElement('button');
        finishBtn.innerHTML = 'Finish';
        finishBtn.addEventListener('click', () => {
            this.SaveForm(this.formValues);
        });
        createInputForm.Render(hostingDiv, false);
        hostingDiv.appendChild(finishBtn);
        let saveBtn = document.getElementById('saveBtn');
        saveBtn.addEventListener('click', () => {
            this.AddField(createInputForm.GetValue(), true);
        });
    }
    AddField(values, renderValues) {
        this.formValues.push(values);
        if (renderValues) {
            let p = document.createElement('p');
            values.forEach((e) => {
                p.innerHTML = p.innerHTML + " " + e;
            });
            let div = document.getElementById('inputs');
            div === null || div === void 0 ? void 0 : div.appendChild(p);
            console.log(this.formValues);
        }
    }
    SaveForm(values) {
        console.log(values);
        let localStorage = new LocStorage();
        localStorage.SaveForm(values);
    }
}
//# sourceMappingURL=FormCreator.js.map