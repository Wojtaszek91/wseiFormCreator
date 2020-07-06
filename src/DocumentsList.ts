import {LocStorage} from "./LocStorage";
   export class DocumentList {
    public ListOfDocsIds: string[];

    constructor(){
        this.ListOfDocsIds = this.getDocumentList();
    }
    getDocumentList(): string[] {
        let locStor = new LocStorage();
        return locStor.GetDocuments();
    }
    Render(containerId : string){
        let tableWithDocsIds = document.createElement('table');
        let dataArray = new Array();
        dataArray.push('Documents Id')

        this.GenerateTableHead(tableWithDocsIds, dataArray);
        this.GenerateTable(tableWithDocsIds, this.ListOfDocsIds);
        document.getElementById(containerId)?.appendChild(tableWithDocsIds);
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
      
      GenerateTable(table : HTMLTableElement, rowsData : any[]) {
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
