import { LocStorage } from "./LocStorage.js";
export class DocumentsList {
    constructor() {
        this.ListOfDocsIds = this.getDocumentList();
    }
    getDocumentList() {
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
        this.GenerateTableHead(tableWithDocsIds, dataArray);
        this.GenerateTable(tableWithDocsIds, this.ListOfDocsIds);
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
    GenerateTable(table, docData) {
        let locStor = new LocStorage();
        let tbody = document.createElement('tbody');
        for (let element of docData) {
            let row = tbody.insertRow();
            let cellDocId = row.insertCell();
            let textDocId = document.createTextNode(element);
            cellDocId.appendChild(textDocId);
            let cellEdit = row.insertCell();
            let editLink = document.createElement("a");
            editLink.setAttribute("href", "edit-document.html?id=".concat(element));
            var EditLinkText = document.createTextNode("edit");
            editLink.appendChild(EditLinkText);
            cellEdit.appendChild(editLink);
            let cellDelete = row.insertCell();
            let deleteLink = document.createElement("a");
            deleteLink.addEventListener('click', () => { locStor.DeleteDocument(element); });
            deleteLink.setAttribute("href", 'document-list.html');
            var DeleteLinkText = document.createTextNode("delete");
            deleteLink.appendChild(DeleteLinkText);
            cellDelete.appendChild(deleteLink);
        }
        table.appendChild(tbody);
    }
}
//# sourceMappingURL=DocumentsList.js.map