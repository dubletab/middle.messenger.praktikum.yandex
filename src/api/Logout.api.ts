import HTTPTransport from '../utils/HTTPTransport';
import { BaseAPI, BASE_URL } from './BaseApi';

const logOutAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

export class LogOutAPI extends BaseAPI {
    static request() {
        return logOutAPIInstance
            .post('logout', {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'content-type': 'application/json',
                },
            })
            .catch((e) => {
                const message = e.message ? e.message : 'Ошибка запроса';
                window.alert(message);
            });
    }
}
