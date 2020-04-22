/// <reference path="Enum/FieldType.ts" />
/// <reference path="Model/Field.ts" />
/// <reference path="Model/Form.ts" />
namespace App {

    const field = new Field ("Imie", "Imie: ",FieldType.Text);
    const field1 = new Field ("Emial", "Emial: ",FieldType.EmailField);
    var formDiv = field.CreateField(field);
    var formdiv1 = field.CreateField(field1);
    var finalform: HTMLFormElement[] = [formDiv, formdiv1];
    const form = new Form(finalform);
    const elo = document.getElementById('try');
    elo!.append(form.createForm());
}