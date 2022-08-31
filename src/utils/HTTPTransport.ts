import { IOptionsTransfer, ITempObj } from './Interfaces';
import { queryStringify } from './helpers';

export default class HTTPTransport {
    METHODS = {
        GET: 'GET',
        PUT: 'PUT',
        POST: 'POST',
        DELETE: 'DELETE',
    };

    get = (url: string, options = {}) =>
        this.request(url, {
            ...options,
            method: this.METHODS.GET,
        } as IOptionsTransfer);

    put = (url: string, options = {}) =>
        this.request(url, {
            ...options,
            method: this.METHODS.PUT,
        } as IOptionsTransfer);

    post = (url: string, options = {}) =>
        this.request(url, {
            ...options,
            method: this.METHODS.POST,
        } as IOptionsTransfer);

    delete = (url: string, options = {}) =>
        this.request(url, {
            ...options,
            method: this.METHODS.DELETE,
        } as IOptionsTransfer);

    request = (url: string, options: IOptionsTransfer) =>
        new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(
                options.method,
                options.method === this.METHODS.GET && !!options.data
                    ? `${url}${queryStringify(options.data as ITempObj)}`
                    : url,
            );
            if (options.headers) {
                Object.keys(options.headers).forEach((key) => {
                    xhr.setRequestHeader(key, options.headers[key]);
                });
            }

            if (options.timeout) {
                xhr.timeout = options.timeout;
            } else {
                xhr.timeout = 5000;
            }

            xhr.onload = () => {
                resolve(xhr);
            };

            xhr.onerror = reject;

            xhr.ontimeout = reject;

            if (options.method === this.METHODS.GET || !options.data) {
                xhr.send();
            } else {
                xhr.send(options.data as XMLHttpRequestBodyInit);
            }
        });
}
