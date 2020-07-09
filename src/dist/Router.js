export class Router {
    constructor() {
    }
    GetParam(key) {
        const query = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query);
        const param = urlParams.get(key);
        return param;
    }
}
//# sourceMappingURL=Router.js.map