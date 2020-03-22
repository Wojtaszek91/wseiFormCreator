import { fieldType } from "./FieldType";

interface Field {
name: string,
label: string,
fieldType: fieldType,
value: string
render(): string
}