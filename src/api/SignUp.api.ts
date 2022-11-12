import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const signupAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

export class SignUpAPI extends BaseAPI {
    static create(data: unknown) {
        return signupAPIInstance
            .post('signup', {
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
