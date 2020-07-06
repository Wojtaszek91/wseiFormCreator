import { LocStorage } from "./LocStorage";
export class DocumentList {
    constructor() {
        this.ListOfDocsIds = this.getDocumentList();
    }
    getDocumentList() {
        let locStor = new LocStorage();
        return locStor.GetDocuments();
    }
    Render(containerId) {
        var _a;
        let tableWithDocsIds = document.createElement('table');
        let dataArray = new Array();
        dataArray.push('Documents Id');
        this.GenerateTableHead(tableWithDocsIds, dataArray);
        this.GenerateTable(tableWithDocsIds, this.ListOfDocsIds);
        (_a = document.getElementById(containerId)) === null || _a === void 0 ? void 0 : _a.appendChild(tableWithDocsIds);
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
    GenerateTable(table, rowsData) {
        for (let element of rowsData) {
            let row = table.insertRow();
            for (let key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
}
//# sourceMappingURL=DocumentsList.js.map