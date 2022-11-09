import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const changeUserInfoAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

export class ChangeUserInfoAPI extends BaseAPI {
    static change(data: any) {
        return changeUserInfoAPIInstance
            .put('profile', {
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
