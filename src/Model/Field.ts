
    // export class Field
    // implements IFieldType {
//         public fieldId: string;
//         public label: FieldLabel;
//         public fieldType: HTMLInputElement;
//         public htmlField?: HTMLElement;
//         public selectOptions?: string[];
//         constructor(
//       fieldId: string,
//       label: FieldLabel,
//       fieldType: HTMLInputElement,
//       selectOptions?: string[]
//     ) {
//         this.fieldId = fieldId;
//         this.label = label;
//         this.fieldType = fieldType;
//         this.selectOptions = selectOptions;
//     }

//     GetValue(): any {
//       let field = this.htmlField as HTMLInputElement;
//       let field1 = this.htmlField as HTMLSelectElement;
//       switch (this.fieldType) {
//         case FieldType.CheckboxField:
//            return field.checked;
//         case FieldType.DateField || FieldType.EmailField || FieldType.Text:
//           return field.value;
//         case FieldType.SelectField:
//           return field1.selectedOptions[field1.selectedIndex];
//         case FieldType.TextAreaField:
//           return field.textContent;
//     }
//   }

//     CreateField(): HTMLDivElement {
//       const newInput = document.createElement("input");
//       const finalInput = document.createElement("div");
//       finalInput.className = "form-control";
//       switch (this.fieldType) {
//         case FieldType.CheckboxField:
//           newInput.type = "checkbox";
//           break;
//         case FieldType.DateField:
//           newInput.type = "date";
//           break;
//         case FieldType.EmailField:
//           newInput.type = "email";
//           break;
//         case FieldType.Text:
//           newInput.type = "text";
//           newInput.value = 'elo';
//           break;
//         case FieldType.SelectField:
//           const selectField = this.createSelectedElWithOptions(
//             this.selectOptions!
//           );
//           selectField.id = this.name
//           finalInput.append(this.createLabel(this.label), selectField);
//           finalInput.id = this.name;
//           return finalInput;
//         case FieldType.TextAreaField:
//           const textArea = document.createElement("textarea");
//           textArea.id = this.name;
//           finalInput.append(this.createLabel(this.label), textArea);
//           return finalInput;
//       }
//       const newLabel = this.createLabel(this.label);
//       newInput.id = this.name;
//       this.htmlField = newInput;
//       finalInput.append(newLabel, newInput);
//       return finalInput;
//     }

//     // create label
//     createLabel(labelTxt: string): HTMLLabelElement {
//       const newLabel = document.createElement("label");
//       newLabel.textContent = labelTxt;
//       newLabel.htmlFor = this.name;
//       return newLabel;
//     }
//     // create select with options
//     createSelectedElWithOptions(
//       optionsStringList: string[]
//     ): HTMLSelectElement {
//       let selectField = document.createElement("select");
//       for (const option of optionsStringList) {
//         var optionEl = document.createElement("option") as HTMLOptionElement;
//         optionEl.text = option;
//         selectField.add(optionEl);
//       }
//       return selectField;
//     }
//   }

