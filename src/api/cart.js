import crud from './base'

const baseUrl = 'http://localhost/cart';

class CartApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    quickProductSearch = (searchQuery) => {
        return crud.get({
            path: `${this.baseUrl}/products?searchQuery=${searchQuery}&pageIndex=0&pageSize=8`
        });
    };

    fullProductSearch = (searchRequest) => {
        return crud.get({
            path: `${this.baseUrl}/products?${this._buildFullSearchUrl(searchRequest)}`
        })
    };

    getProductById = (productId) => {
        return crud.get({
            path: `${this.baseUrl}/products/${productId}`
        })
    };

    _buildFullSearchUrl(searchRequest) {
        let uri = Object.keys(searchRequest)
            .map(key => {
                if (searchRequest[key]) {
                    if (key === 'parameters') {
                        return searchRequest[key]
                            .map(p => `${p.name}=${p.options.join(',')}`)
                            .join('&');
                    }
                    return `${key}=${searchRequest[key]}`;
                }
                return null;
            })
            .filter(component => component != null)
            .join('&');
        return encodeURI(uri);
    };
}

const catalogueApi = new CartApi(baseUrl);

export default catalogueApi;
