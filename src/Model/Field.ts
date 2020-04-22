namespace App {
  export class Field implements IFieldType {
    constructor(
      public name: string,
      public label: string,
      public fieldType: FieldType,
    ) {}

    // no textarea
    CreateField(field: Field): any{
        const newInput = document.createElement('input');
        switch(field.fieldType){
            case FieldType.CheckboxField :
            newInput.type = 'checkbox'
            case FieldType.DateField :
            newInput.type = 'date'
            case FieldType.EmailField :
            newInput.type = 'email'
            case FieldType.Text :
            newInput.type = 'text'
            case FieldType.SelectField :
            newInput.type = 'select'
        }
        const newLabel = document.createElement('label');
        newLabel.textContent = field.label
        const finalInput = document.createElement('div');       
        finalInput.append(newLabel, newInput);
        return finalInput;
    }
  }
}
