    export interface IDataStorage {
        SaveDocument(document:any, idForm: string, docId?: string):void,
        LoadDocument(Id:string):any,
        GetDocuments(): Array<string[]>;
    }