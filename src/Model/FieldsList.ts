/// <reference path="basic.ts"/>
namespace App {
  export class FieldsList extends Component<HTMLElement, HTMLElement> {
    public fieldsList: Field[] = [];
    public htmlElementsList: HTMLElement[] = [];
    constructor() {
      super("form-list", "fields", false);
    }
    manipulateFields(field: Field, add: boolean) {
      if (add) {
        this.fieldsList.push(field);
        this.htmlElementsList.push(field.CreateField());
      } else {
        this.fieldsList.filter((item) => item.name === field.name);
        this.htmlElementsList.filter(item => item.id === field.name);
      }
      this.renderContent();
    }
    configurate() {}
    renderContent() {
      this.element.querySelector("header")!.innerHTML = "Lista dodanych pol";
      const ulList = this.element.querySelector("ul") as HTMLUListElement;
      ulList.innerHTML = "";
      for (const fieldEl of this.fieldsList) {
        let newLiEl = document.createElement("li");
        newLiEl.innerHTML = `Label: "${fieldEl.label}" <br> Field type: "${fieldEl.fieldType}"`;
        ulList.appendChild(newLiEl);
      }
    }
  }
}
