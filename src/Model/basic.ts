namespace App {
    export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        templateElement: HTMLTemplateElement;
        hostedElement: T;
        element: U;
      
        constructor(
          templateId: string,
          hostedElId: string,
          insertAtStart: boolean,
          newElementId?: string
        ) {
          this.templateElement = document.getElementById(
            templateId
          )! as HTMLTemplateElement;
          this.hostedElement = document.getElementById(hostedElId)! as T;
      
          const importNode = document.importNode(this.templateElement.content, true);
          this.element = importNode.firstElementChild as U;
      
          if (newElementId) this.element.id = newElementId;
      
          this.attach(insertAtStart);
        }
        private attach(insertAtBeggining: boolean) {
          this.hostedElement.insertAdjacentElement(
            insertAtBeggining ? "afterbegin" : "beforeend",
            this.element
          );
        }
        abstract configurate(): void;
        abstract renderContent(): void;
      }
}