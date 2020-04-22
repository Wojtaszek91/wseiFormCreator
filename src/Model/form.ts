namespace App {
  export class Form {
    constructor(public fieldList: HTMLElement[]) {
    }
    createForm(): HTMLFormElement {
      const newForm = document.createElement("form");
      for (const fieldItem of this.fieldList) newForm.appendChild(fieldItem);
      const submitButton = document.createElement('button');
      submitButton.innerHTML = 'Potwierdz';
      newForm.append(submitButton);
      return newForm;
    }
  }
}