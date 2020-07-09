    export interface IDataStorage {
        SaveDocument(document:any, id: string):any,
        LoadDocument(Id:string):any,
        GetDocuments(): Array<string[]>;
    }