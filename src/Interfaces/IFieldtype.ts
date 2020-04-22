namespace App {
export interface IFieldType {
name: string,
label: HTMLLabelElement,
fieldType: FieldType,
value: string,
GetValue(): Function
}
}