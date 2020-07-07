import {LocStorage} from "./LocStorage.js";
   export class DocumentsList {
    public ListOfDocsIds = this.getDocumentList();

    constructor(){
    }
    getDocumentList(): string[] {
        let locStor = new LocStorage();
        return locStor.GetDocuments();
    }
    Render(){
        let tableWithDocsIds = document.createElement('table');
        let dataArray = new Array();
        dataArray.push('Documents Id');
        dataArray.push('Edit');
        dataArray.push('Delete');

        this.GenerateTableHead(tableWithDocsIds, dataArray);
        this.GenerateTable(tableWithDocsIds, this.ListOfDocsIds);
        document.getElementById('tableDiv')?.appendChild(tableWithDocsIds);
    }


     GenerateTableHead(table : HTMLTableElement, headersData : any[]) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of headersData) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      
      GenerateTable(table : HTMLTableElement, docData : string[]) {
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
            deleteLink.addEventListener('click',()=> {locStor.DeleteDocument(element)});
            deleteLink.setAttribute("href", 'document-list.html');
            var DeleteLinkText = document.createTextNode("delete");
            deleteLink.appendChild(DeleteLinkText);
            cellDelete.appendChild(deleteLink);

        }
        

        table.appendChild(tbody);
      }
      
}
