export class LocStorage {
    SaveDocument(doc) {
        const newDocumentId = 'Document-'.concat(Date.now().toString());
        console.log(doc);
        localStorage.setItem(newDocumentId, JSON.stringify(doc));
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
        return newDocumentId;
    }
    LoadDocument(Id) {
        let documentFromStorage = localStorage.getItem(Id);
        if (documentFromStorage != null) {
            return JSON.parse(documentFromStorage);
        }
    }
    GetDocuments() {
        let documentsIds = new Array();
        for (let i = 0; i < localStorage.length; i++) {
            documentsIds.push(localStorage.key(i));
        }
        return documentsIds;
    }
}
//# sourceMappingURL=LocStorage.js.map