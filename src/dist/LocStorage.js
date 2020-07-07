export class LocStorage {
    SaveDocumentInList(newDocumentId) {
        let docsIds = localStorage.getItem('DocumentsIds');
        if (docsIds === null) {
            let docsIds = new Array();
            docsIds.push(newDocumentId);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
        else {
            let docsIds = JSON.parse(localStorage.getItem('DocumentsIds'));
            docsIds.push(newDocumentId);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
    }
    SaveDocument(doc) {
        const newDocumentId = 'Document-'.concat(Date.now().toString());
        console.log(doc);
        localStorage.setItem(newDocumentId, JSON.stringify(doc));
        this.SaveDocumentInList(newDocumentId);
        return newDocumentId;
    }
    LoadDocument(Id) {
        let documentFromStorage = localStorage.getItem(Id);
        if (documentFromStorage != null) {
            return JSON.parse(documentFromStorage);
        }
    }
    DeleteDocument(Id) {
        localStorage.removeItem(Id);
        let docsList = this.GetDocuments();
        let docIndex = docsList.indexOf(Id);
        docsList.splice(docIndex, 1);
        localStorage.setItem('DocumentsIds', JSON.stringify(docsList));
    }
    GetDocuments() {
        let docs = localStorage.getItem('DocumentsIds');
        if (docs != null) {
            let parsedDocs = JSON.parse(docs);
            return parsedDocs;
        }
        else
            return new Array();
    }
}
//# sourceMappingURL=LocStorage.js.map