namespace App {
  export class FormControl {
    public inputsList: HTMLElement[] = [];
    constructor(public form: HTMLFormElement) {}



    renderValues() {
      const el = document.getElementById("values");

      let newEl = document.createElement("p");
      for (const inputEl of this.inputsList) {
        if (inputEl instanceof HTMLInputElement) {
          const pElement = document.createElement("p");
          pElement.innerHTML = `Label: "${
            inputEl.labels![0].innerHTML
          }" <br> Typ pola: "${inputEl.type}" <br> Wartosc pola: "${
            inputEl.value
          }"`;
          el!.append(pElement);
        }
        if (
          inputEl instanceof HTMLTextAreaElement ||
          inputEl instanceof HTMLSelectElement
        ) {
          const labeltxt = this.findLabel(inputEl.id);
          newEl.innerHTML = `Label: "${labeltxt.textContent}" <br> Typ pola: ${inputEl.type} <br> Wartosc pola: ${inputEl.value}`;
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
