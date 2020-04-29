/// <reference path="Enum/FieldType.ts" />
/// <reference path="Model/Field.ts" />
/// <reference path="Model/Form.ts" />
/// <reference path="decorator/autobind.ts"/>
/// <reference path="Model/FieldsList.ts"/>
/// <reference path="Model/FormControl.ts"/>
namespace App {
    const fieldsList = new FieldsList();
  //  create form template
    const options = ['text','email','textarea','date','select','checkbox']  
    fieldsList.manipulateFields(new Field ('1', "Typ pola: ", FieldType.SelectField, options),true);
    fieldsList.manipulateFields(new Field ('2', "Opis: ",FieldType.Text),true);
    const form = new Form('form',fieldsList.htmlElementsList);        
    form.renderContent();
    const controlForm = new FormControl(document.getElementById('10') as HTMLFormElement);
    controlForm.gatherInputElements();
}