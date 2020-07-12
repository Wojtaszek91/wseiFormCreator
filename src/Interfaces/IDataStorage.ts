    export interface IDataStorage {
        SaveDocument(document:any, idForm: string, docId?: string): void,
        LoadDocument(Id:string): any,
        GetDocuments(): Array<string[]>;
        SaveDocumentInList(newDocumentId: string, formId: string): void;
        SaveFormInList(newFormId: string):  void;
        SaveForm(form: any): void;
        LoadForm(Id: string): void;
        GetForms(): string[];
    }