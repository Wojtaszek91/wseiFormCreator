import { FieldLabel } from "./Model/FieldLabel.js";
import { InputField } from "./Model/InputField.js";
import {TextAreaField} from "./Model/TextAreaField.js"
import { DateField } from "./Model/DateField.js";
import { CheckboxField } from "./Model/CheckboxField.js";
import { EmailField } from "./Model/EmailField.js";
import { SelectField } from "./Model/SelectField.js";
import { Form } from "./Model/form.js";




    let div = document.createElement("div");
    let divArea = document.createElement("div");
    let divDate = document.createElement('div');
    let divCheckbox = document.createElement('div');
    let divEmail = document.createElement('div');
    let divSelect = document.createElement('div');

    let label = new FieldLabel("Opis labelka", "id");
    let inputField = new InputField('id', label);
    label.RenderLabel(div);
    inputField.Render(div);

    let labelArea = new FieldLabel("Area Label", 'idArea');
    let textArea = new TextAreaField('idArea', labelArea);
    labelArea.RenderLabel(divArea);
    textArea.Render(divArea);

    let labelDate = new FieldLabel('Date label', 'idDate');
    let dateInput = new DateField('dateId', labelDate);
    labelDate.RenderLabel(divDate);
    dateInput.Render(divDate);

    let labelCheckbox = new FieldLabel('Checkbox label', 'idCheckbox');
    let checkboxInput = new CheckboxField('IdCheckbox', labelCheckbox);
    labelCheckbox.RenderLabel(divCheckbox);
    checkboxInput.Render(divCheckbox);

    let labelEmail = new FieldLabel('Email label', 'idEmail');
    let emailInput = new EmailField('idEmail', labelEmail);
    labelEmail.RenderLabel(divEmail);
    emailInput.Render(divEmail);

    let selectLabel = new FieldLabel('Select label', 'idSelect');
    let selectOptions = ['Informatyka i Ekonometria','Machine Learning', 'Buisness Inteligence']
    let selectInput = new SelectField('idSelect', selectLabel, selectOptions);
    selectLabel.RenderLabel(divSelect);
    selectInput.Render(divSelect);

    let InputsArray = new Array<CheckboxField | DateField | EmailField | InputField | SelectField | TextAreaField>();
    InputsArray.push(inputField);
    InputsArray.push(textArea);
    InputsArray.push(dateInput);
    InputsArray.push(checkboxInput);
    InputsArray.push(emailInput);
    InputsArray.push(selectInput);


    let newForm = new Form(InputsArray);

    let temp = document.getElementById('try') as HTMLDivElement;
    newForm.Render(temp);



  
  // temp.appendChild(newForm.GetValue());
