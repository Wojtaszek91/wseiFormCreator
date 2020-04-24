/// <reference path="../decorator/autobind.ts"/>
/// <reference path="basic.ts"/>
namespace App {
    export class Field
    implements IFieldType {
        public name: string;
        public label: string;
        public fieldType: FieldType;
        public selectOptions?: string[];
        constructor(
      name: string,
      label: string,
      fieldType: FieldType,
      selectOptions?: string[]
    ) {
        this.name = name;
        this.label = label;
        this.fieldType = fieldType;
        this.selectOptions = selectOptions;
    }

    CreateField(): HTMLDivElement {
      const newInput = document.createElement("input");
      const finalInput = document.createElement("div");
      finalInput.className = "form-control";
      switch (this.fieldType) {
        case FieldType.CheckboxField:
          newInput.type = "checkbox";
          break;
        case FieldType.DateField:
          newInput.type = "date";
          break;
        case FieldType.EmailField:
          newInput.type = "email";
          break;
        case FieldType.Text:
          newInput.type = "text";
          newInput.value = 'elo';
          break;
        case FieldType.SelectField:
          const selectField = this.createSelectedElWithOptions(
            this.selectOptions!
          );
          selectField.id = this.name
          finalInput.append(this.createLabel(this.label), selectField);
          finalInput.id = this.name;
          return finalInput;
        case FieldType.TextAreaField:
          const textArea = document.createElement("textarea");
          textArea.id = this.name;
          finalInput.append(this.createLabel(this.label), textArea);
          return finalInput;
      }
      const newLabel = this.createLabel(this.label);
      newInput.id = this.name;
      finalInput.append(newLabel, newInput);
      return finalInput;
    }

    // create label
    createLabel(labelTxt: string): HTMLLabelElement {
      const newLabel = document.createElement("label");
      newLabel.textContent = labelTxt;
      newLabel.htmlFor = this.name;
      return newLabel;
    }
    // create select with options
    createSelectedElWithOptions(
      optionsStringList: string[]
    ): HTMLSelectElement {
      let selectField = document.createElement("select");
      for (const option of optionsStringList) {
        var optionEl = document.createElement("option") as HTMLOptionElement;
        optionEl.text = option;
        selectField.add(optionEl);
      }
      return selectField;
    }
  }
}
