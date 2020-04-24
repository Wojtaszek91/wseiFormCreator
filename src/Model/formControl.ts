namespace App {
  export class FormControl {
    public form: HTMLFormElement;
    constructor(form: HTMLFormElement) {
      this.form = form;
    }

    gatherInputs() {
      const elements = this.form.elements;
      for (const control of elements) {
        const el = control as HTMLInputElement;
        console.log(el.value);
        
      }
    }
  }
}
