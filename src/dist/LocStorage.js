export class LocStorage {
    SaveDocumentInList(newDocumentId, formId) {
        if (localStorage.getItem('DocumentsIds') === null) {
            let docsIds = new Array();
            docsIds.push([newDocumentId, formId]);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
        else {
            let docsIds = JSON.parse(localStorage.getItem('DocumentsIds'));
            docsIds.push([newDocumentId, formId]);
            localStorage.setItem('DocumentsIds', JSON.stringify(docsIds));
        }
    }
    SaveFormInList(newFormId) {
        if (localStorage.getItem('FormsIds') === null) {
            let formsIds = new Array();
            formsIds.push(newFormId);
            localStorage.setItem('FormsIds', JSON.stringify(formsIds));
        }
        else {
            let formsIds = JSON.parse(localStorage.getItem('FormsIds'));
            formsIds.push(newFormId);
            localStorage.setItem('FormsIds', JSON.stringify(formsIds));
        }
    }
    SaveDocument(doc, formId, docId) {
        if (docId == undefined) {
            const newDocumentId = 'Document-'.concat(Date.now().toString());
            this.SaveDocumentInList(newDocumentId, formId);
            localStorage.setItem(newDocumentId, JSON.stringify(doc));
        }
        else if (docId) {
            localStorage.setItem(docId, JSON.stringify(doc));
        }
    }
    SaveForm(form) {
        const newFormId = 'Form-'.concat(Date.now().toString());
        localStorage.setItem(newFormId, JSON.stringify(form));
        this.SaveFormInList(newFormId);
        return newFormId;
    }
    LoadForm(Id) {
        return JSON.parse(localStorage.getItem(Id));
    }
    LoadDocument(Id) {
        let documentFromStorage = localStorage.getItem(Id);
        if (documentFromStorage != null) {
            return JSON.parse(documentFromStorage);
        }
    }
    DeleteDocument(docId, formId) {
        localStorage.removeItem(docId);
        let docsList = this.GetDocuments();
        let docIndex = docsList.indexOf([docId, formId]);
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
    GetForms() {
        let forms = localStorage.getItem('FormsIds');
        if (forms != null) {
            let parsedForms = JSON.parse(forms);
            return parsedForms;
        }
        else
            return new Array();
    }
}
//# sourceMappingURL=LocStorage.js.map