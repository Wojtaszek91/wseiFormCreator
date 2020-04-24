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
    const input1 = new Field ('1', "Typ pola: ", FieldType.SelectField, options);
    ;
    const input2 = new Field ('2', "Opis: ",FieldType.Text);
    ;
  
    fieldsList.manipulateFields(input1,true);
    fieldsList.manipulateFields(input2,true);
    
    const form = new Form('form',[input1.CreateField(),input2.CreateField()]);
        
    form.renderContent();
    const controlForm = new FormControl(document.getElementById('10') as HTMLFormElement);
    controlForm.gatherInputElements();

//     const field5 = new Field (form.fieldIdList.length.toString(), "Opis: ",FieldType.Text);
//     var formdiv5 = field5.CreateField();
//     var finalform1: HTMLFormElement[] = [formdiv5];
    
    
//   // submit the form template  
//     const elo = document.getElementById('try');
//     elo!.append(form.createForm(finalform));
//     // render form
//    form.renderContent('render',form.createForm(finalform1));
}