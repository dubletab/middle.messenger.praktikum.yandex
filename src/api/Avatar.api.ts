import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const avatarAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

export class AvatarAPI extends BaseAPI {
    static change(data: unknown) {
        return avatarAPIInstance
            .put('profile/avatar', {
                credentials: 'include',
                mode: 'cors',
                body: data,
            })
            .then((response) => response)
            .catch((e) => {
                const message = e.message ? e.message : 'Ошибка запроса';
                window.alert(message);
            });
    }
}
