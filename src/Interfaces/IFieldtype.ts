import  {FieldLabel } from "../Model/FieldLabel.js";
export interface IFieldType {
label: FieldLabel,
fieldType: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
GetValue(): string,
SetDefaultValue(value: string): void,
Render(hostingElement: HTMLElement): void,
GetField(): any
}


