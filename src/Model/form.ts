/// <reference path="basic.ts"/>
namespace App {
  export class Form extends Component<HTMLElement,HTMLElement> {
    public id: string;
    public fieldIdList: Array<string> = [];
    public fieldInputs: HTMLElement[];
    
    constructor(id: string, fieldInputs: HTMLElement[]) {
        super("template-form", "render", false);
        this.id = id;
        this.fieldInputs = fieldInputs;
    }
    
    createForm(): HTMLFormElement {
      const newForm = document.createElement("form");
      //for (const fieldItem of fieldList) newForm.append(fieldItem);
      newForm.append(...this.fieldInputs);
      const submitButton = document.createElement("button");
      submitButton.innerHTML = "Dodaj";
      submitButton.type = "submit";
      newForm.append(submitButton);
      newForm.id = '10';
      return newForm;
    }
    configurate(){}
    renderContent() {
    this.element.append(this.createForm());
    }

   // this.element.addEventListener("submit", this.SubmitHandler);
//    @autoBind
//    private SubmitHandler(event: Event) {
//     event.preventDefault();
//     }
  }
  }

