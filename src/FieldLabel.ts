import { IField } from "./IField";
import { fieldType } from "./FieldType";
class FieldLabel {

    constructor(){
        function setInputField(input: IField, inName: string, inLabel: string, inFieldType: fieldType) {
            let inputField: HTMLElement;
            input = {
                name: inName,
                label:  inLabel,
                fieldType: inFieldType,
                value: undefined,
                render(){
                    return ""
                }
            }
        }
    }


}

