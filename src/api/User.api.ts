import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const userInfoAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

export class UserAPI extends BaseAPI {
    static request() {
        return userInfoAPIInstance
            .get('user', {
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
