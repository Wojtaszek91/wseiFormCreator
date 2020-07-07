import {IDataStorage} from "./Interfaces/IDataStorage.js"
    export class LocStorage implements IDataStorage {

        SaveDocument(doc:any) {
            const newDocumentId = 'Document-'.concat(Date.now().toString());
            console.log(doc);
            localStorage.setItem(newDocumentId,JSON.stringify(doc));
            let docsIds = localStorage.getItem('DocumentsIds');
            if(docsIds === null){
                let docsIds:string[] = new Array();
                docsIds.push(newDocumentId);
                localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
            }
            else {
                let docsIds: string[] = JSON.parse(localStorage.getItem('DocumentsIds')!);
                docsIds.push(newDocumentId);
                localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
            }
            return newDocumentId;

        }
        LoadDocument(Id: string) {
            let documentFromStorage = localStorage.getItem(Id);
            if(documentFromStorage != null){
                return JSON.parse(documentFromStorage);
            }
        }
        GetDocuments(): string[] {
            let documentsIds:string[] = new Array();
            for (let i = 0; i < localStorage.length; i++){
                documentsIds.push(localStorage.key(i)!);
        }
                return documentsIds;
    }
    }
