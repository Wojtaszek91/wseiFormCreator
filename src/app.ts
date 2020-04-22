/// <reference path="Enum/FieldType.ts" />
/// <reference path="Model/Field.ts" />
/// <reference path="Model/Form.ts" />
namespace App {

    // create form form
    const options = ['text','email','textarea','date','select','checkbox']
    const field = new Field ("typ", "Typ pola: ", FieldType.SelectField, options);
    var formDiv = field.CreateField(field);

    const field1 = new Field ("opis", "Opis: ",FieldType.Text);
    var formdiv1 = field1.CreateField(field1);

    var finalform: HTMLFormElement[] = [formdiv1, formDiv];
    const form = new Form(finalform);
    const elo = document.getElementById('try');
    elo!.append(form.createForm());

    // listaInputow dla form + id
}