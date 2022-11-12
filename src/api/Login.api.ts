import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const loginAPITransport = new HTTPTransport(`${BASE_URL}/auth/`);

export class LoginAPI extends BaseAPI {
    static request(data: unknown) {
        return loginAPITransport
            .post('signin', {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .catch((e) => {
                const message = e.message ? e.message : 'Ошибка запроса';
                window.alert(message);
            });
    }
}
