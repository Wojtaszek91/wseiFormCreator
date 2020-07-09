import {Router} from "./Router.js"
import { LocStorage } from "./LocStorage.js";
import { FormCreator } from "./FormCreator.js";



let router = new Router();
let idForm = router.GetParam('idForm');
let idDoc = router.GetParam('idDoc')

let locStor = new LocStorage();
let formValues = locStor.LoadForm(idForm!) as Array<string>[];
let docValues = locStor.LoadDocument(idDoc!);

let formDiv = document.getElementById('formDiv') as HTMLDivElement;

let fromCrt = new FormCreator();

formValues.forEach((e) => {
    fromCrt.AddField(e,false);
});

let form = fromCrt.CreateNewForm(formValues,idForm!);
form.SetDefault(docValues);
form.Render(formDiv,true);
