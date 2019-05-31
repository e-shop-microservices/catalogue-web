import crud from './base'

const baseUrl = 'http://localhost/catalogue';

class CatalogueApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    quickProductSearch = (searchQuery) => {
        return crud.get({
            path: `${this.baseUrl}/products?searchQuery=${searchQuery}&pageIndex=0&pageSize=8`
        });
    };

    fullProductSearch = (searchRequest) => {
        let relativePath = `/products?${this._buildFullSearchUrl(searchRequest)}`;
        return crud.get({
            path: this.baseUrl + relativePath
        })
    };

    getProductById = (productId) => {
        console.log(`${this.baseUrl}/products/${productId}`);
        return crud.get({
            path: `${this.baseUrl}/products/${productId}`
        })
    };

    _buildFullSearchUrl(searchRequest) {
        return Object.keys(searchRequest)
            .map(key => {
                if (searchRequest[key]) {
                    if (key === 'parameters') {
                        return searchRequest[key]
                            .map(p => p.options.map(o => `${encodeURIComponent(p.name)}=${encodeURIComponent(o)}`).join('&'))
                            .join('&');
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(searchRequest[key])}`;
                }
                return null;
            })
            .filter(component => component != null)
            .join('&');
    };
}

const catalogueApi = new CatalogueApi(baseUrl);

export default catalogueApi;
