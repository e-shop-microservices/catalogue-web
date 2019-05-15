const baseUrl = 'http://localhost/api';

const createHeaders = (token) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
};

const createRequest = ({method}) => (
    function request({path, body}) {
        const requestBody = {
            headers: createHeaders(),
            method,
        };

        if (body) {
            requestBody.body = JSON.stringify(body);
        }

        return fetch(path, requestBody).then(body => body.json());
    }
);

const crud = {
    post: createRequest({method: 'POST'}),
    get: createRequest({method: 'GET'}),
    put: createRequest({method: 'PUT'}),
    delete: createRequest({method: 'DELETE'})
};

class CatalogueApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    quickProductSearch = (searchQuery) => {
        return crud.get(
            {
                path: `${baseUrl}/products?searchQuery=${searchQuery}&pageIndex=0&pageSize=8`
            });
    }
}

const catalogueApi = new CatalogueApi(baseUrl);

export default catalogueApi;