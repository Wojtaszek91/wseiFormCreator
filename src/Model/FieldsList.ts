/// <reference path="basic.ts"/>
namespace App {
    export class FieldsList extends Component<HTMLElement, HTMLElement> {
        public fieldsList: Field[] = [];
        constructor(){
            super('form-list','fields',false);
        }
        manipulateFields(field: Field, add: boolean){
            if(add) this.fieldsList.push(field);
            else this.fieldsList.filter(  item => item === field );
            this.renderContent();
        }
        configurate(){}
        renderContent(){
            this.element.querySelector('header')!.innerHTML = 'Lista dodanych pol';
            const ulList = this.element.querySelector('ul') as HTMLUListElement
            ulList.innerHTML = "";
            for(const fieldEl of this.fieldsList){
                let newLiEl = document.createElement('li');
                newLiEl.innerHTML = fieldEl.label;
                ulList.appendChild(newLiEl);
            }
              }
        }
    }
