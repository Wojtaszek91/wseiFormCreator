import {IDataStorage} from "./Interfaces/IDataStorage.js"
    export class LocStorage implements IDataStorage {

        SaveDocumentInList(newDocumentId: string, formId: string){
            if(localStorage.getItem('DocumentsIds') === null){
                let docsIds = new Array<string[]>();
                docsIds.push([newDocumentId,formId]);
                localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
            }
            else {
                let docsIds = JSON.parse(localStorage.getItem('DocumentsIds')!) as Array<string[]>;
                docsIds.push([newDocumentId, formId]);
                localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
            }        
        }

        SaveFormInList(newFormId: string){
            if(localStorage.getItem('FormsIds') === null){
                let formsIds = new Array<string>();
                formsIds.push(newFormId);
                localStorage.setItem('FormsIds', JSON.stringify(formsIds));
            }
            else {
                let formsIds = JSON.parse(localStorage.getItem('DocumentsIds')!) as Array<string>;
                formsIds.push(newFormId);
                localStorage.setItem('FormsIds', JSON.stringify(formsIds));
            }        
        }

        SaveDocument(doc:any, formId: string) {
            const newDocumentId = 'Document-'.concat(Date.now().toString());
            localStorage.setItem(newDocumentId,JSON.stringify(doc));
            this.SaveDocumentInList(newDocumentId, formId);

            return newDocumentId;
        }

        SaveForm(form: any){
            const newFormId = 'Form-'.concat(Date.now().toString());
            localStorage.setItem(newFormId,JSON.stringify(form));
            this.SaveFormInList(newFormId);
            return newFormId;
        }

        LoadForm(Id: string) {
            return JSON.parse(localStorage.getItem(Id)!);
            }

        LoadDocument(Id: string) {
                let documentFromStorage = localStorage.getItem(Id);
                if(documentFromStorage != null){
                    return JSON.parse(documentFromStorage);
                }}

        DeleteDocument(docId: string, formId: string){
            localStorage.removeItem(docId);
            let docsList = this.GetDocuments();
            let docIndex = docsList.indexOf([docId,formId]);
            docsList.splice(docIndex,1);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsList));
        }

        GetDocuments(): Array<string[]> {
            let docs = localStorage.getItem('DocumentsIds');
            if(docs != null){
            let parsedDocs = JSON.parse(docs) as Array<string[]>;
            return parsedDocs;
            } else return new Array<string[]>();
    }
          GetForms(): string[] {
            let forms = localStorage.getItem('FormsIds');
            if(forms != null){
            let parsedForms = JSON.parse(forms) as string[];
            return parsedForms;
            } else return new Array();
}
    }
