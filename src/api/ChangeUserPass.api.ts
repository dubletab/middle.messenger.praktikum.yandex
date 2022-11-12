import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const changeUserPwdAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

export class ChangeUserPwdAPI extends BaseAPI {
    static change(data: unknown) {
        return changeUserPwdAPIInstance
            .put('password', {
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => response)
            .catch((e) => {
                const message = e.message ? e.message : 'Ошибка запроса';
                window.alert(message);
            });
    }
}
