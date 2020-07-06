import  {FieldLabel } from "../Model/FieldLabel.js";
export interface IFieldType {
label: FieldLabel,
fieldType: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
GetValue(): string,
Render(hostingElement: HTMLElement): void
}


