    export interface IDataStorage {

        SaveDocument(document:any):any,
        LoadDocument(Id:string):any,
        GetDocuments(): string[];
    }