namespace App {
  export class FormControl {
    public inputsList: HTMLElement[] = [];
    constructor(public form: HTMLFormElement) {}

    gatherInputElements() {
      const elements = this.form.elements;

      for (const control of elements) {
        const el = control as HTMLElement;
        this.inputsList.push(el);
      }
      this.renderValues();
    }

    renderValues() {
      const el = document.getElementById("values");

      let newEl = document.createElement("p");
      for (const inputel of this.inputsList) {
        if (inputel instanceof HTMLInputElement) {
          const pElement = document.createElement("p");
          pElement.innerHTML = `Label: "${
            inputel.labels![0].innerHTML
          }" <br> Typ pola: "${inputel.type}" <br> Wartosc pola: "${
            inputel.value
          }"`;
          el!.append(pElement);
        }
        if (
          inputel instanceof HTMLTextAreaElement ||
          inputel instanceof HTMLSelectElement
        ) {
          const labeltxt = this.findLabel(inputel.id);
          newEl.innerHTML = `Label: "${labeltxt.textContent}" <br> Typ pola: ${inputel.type} <br> Wartosc pola: ${inputel.value}`;
          el!.append(newEl);
        }
      }
    }
    findLabel(id: string): HTMLLabelElement {
        const labels = document.getElementsByTagName('LABEL')!;
        let labelOutput = document.createElement('label');
        for (var i = 0; i < labels.length; i++) {
            let labelOutput = labels[i] as HTMLLabelElement;
            if (labelOutput.htmlFor == id) {
                return labelOutput;
        }
    }
      return labelOutput;
  }
}
}
