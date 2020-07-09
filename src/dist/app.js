import { Router } from "./Router.js";
import { FormCreator } from "./FormCreator.js";
import { LocStorage } from "./LocStorage.js";
let router = new Router();
const formId = router.GetParam('formId');
let locStor = new LocStorage();
let formValues = locStor.LoadForm(formId);
console.log(formValues);
let formCrt = new FormCreator();
const form = formCrt.CreateNewForm(formValues, formId);
let temp = document.getElementById('try');
form.Render(temp, true);
//# sourceMappingURL=app.js.map