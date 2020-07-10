import { LocStorage } from "./LocStorage.js";
export class DocumentsList {
    constructor() {
        this.ListOfDocsIds = this.GetDocumentList();
    }
    GetDocumentList() {
        let locStor = new LocStorage();
        return locStor.GetDocuments();
    }
    Render() {
        var _a;
        let tableWithDocsIds = document.createElement('table');
        let dataArray = new Array();
        dataArray.push('Documents Id');
        dataArray.push('Edit');
        dataArray.push('Delete');
        dataArray.push('Form Id');
        this.GenerateTableHead(tableWithDocsIds, dataArray);
        this.GenerateTableBody(tableWithDocsIds, this.ListOfDocsIds);
        (_a = document.getElementById('tableDiv')) === null || _a === void 0 ? void 0 : _a.appendChild(tableWithDocsIds);
    }
    GenerateTableHead(table, headersData) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of headersData) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }
    }
    GenerateTableBody(table, docData) {
        let locStor = new LocStorage();
        let tbody = document.createElement('tbody');
        for (let i = 0; i < docData.length; i++) {
            let row = tbody.insertRow();
            let cellDocId = row.insertCell();
            let textDocId = document.createTextNode(docData[i][0]);
            cellDocId.appendChild(textDocId);
            let cellEdit = row.insertCell();
            let editLink = document.createElement("a");
            editLink.setAttribute("href", "edit-document.html?idForm=".concat(docData[i][1]) + '&idDoc='.concat(docData[i][0]));
            let EditLinkText = document.createTextNode("edit");
            editLink.appendChild(EditLinkText);
            cellEdit.appendChild(editLink);
            let cellDelete = row.insertCell();
            let deleteLink = document.createElement("a");
            deleteLink.addEventListener('click', () => { locStor.DeleteDocument(docData[i][0], docData[0][1]); });
            deleteLink.setAttribute("href", 'document-list.html');
            let DeleteLinkText = document.createTextNode("delete");
            deleteLink.appendChild(DeleteLinkText);
            cellDelete.appendChild(deleteLink);
            let cellForm = row.insertCell();
            let textFormId = document.createTextNode(docData[i][1]);
            cellForm.appendChild(textFormId);
        }
        table.appendChild(tbody);
    }
}
//# sourceMappingURL=DocumentsList.js.map