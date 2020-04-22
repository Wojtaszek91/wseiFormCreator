namespace App {
  export class Field implements IFieldType {
    constructor(
      public name: string,
      public label: string,
      public fieldType: FieldType,
      public selectOptions?: string[]
    ) {}

    CreateField(field: Field): any {
      const newInput = document.createElement("input");
      const finalInput = document.createElement("div");
      switch (field.fieldType) {
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
          break;
        case FieldType.SelectField:
          const selectField = this.createSelectedElWithOptions(
            this.selectOptions!
          );
          finalInput.append(this.createLabel(field.label), selectField);
          return finalInput;
        case FieldType.TextAreaField:
          const textArea = document.createElement("textarea");
          finalInput.append(this.createLabel(field.label), textArea);
          return finalInput;
      }
      const newLabel = this.createLabel(field.label);
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
        var optionEl = document.createElement('option') as HTMLOptionElement;
        optionEl.text = option;
        selectField.add(optionEl);
      }
      return selectField;
    }
  }
}
