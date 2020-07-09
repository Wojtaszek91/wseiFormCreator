export class Router{

    constructor(){

    }

    GetParam(key:string): string | null{
        const query: string = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query); 
        const param = urlParams.get(key);  
        return param;     
    }


}


