import {IDataStorage} from "./Interfaces/IDataStorage.js"
    export class LocStorage implements IDataStorage {

        SaveDocumentInList(newDocumentId: string){

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
        }
        SaveDocument(doc:any) {
            const newDocumentId = 'Document-'.concat(Date.now().toString());
            console.log(doc);
            localStorage.setItem(newDocumentId,JSON.stringify(doc));
            this.SaveDocumentInList(newDocumentId);

            return newDocumentId;

        }
        LoadDocument(Id: string) {
            let documentFromStorage = localStorage.getItem(Id);
            if(documentFromStorage != null){
                return JSON.parse(documentFromStorage);
            }
        }
        DeleteDocument(Id: string){
            localStorage.removeItem(Id);
            let docsList = this.GetDocuments();
            let docIndex = docsList.indexOf(Id);
            docsList.splice(docIndex,1);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsList));
        }
        GetDocuments(): string[] {
            let docs = localStorage.getItem('DocumentsIds');
            if(docs != null){
            let parsedDocs = JSON.parse(docs);
            return parsedDocs as string[];
            } else return new Array();
    }
    }
