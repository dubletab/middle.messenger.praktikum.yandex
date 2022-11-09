import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const chatAPIInstance = new HTTPTransport(`${BASE_URL}/chats`);

type DataUsersType = {
    chatId: number;
    users: number[];
};

export class ChatApi extends BaseAPI {
    static create(data: unknown) {
        return chatAPIInstance
            .post('', {
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

    static request() {
        return chatAPIInstance
            .get('', {
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

    static delete(data: { chatId: number }) {
        return chatAPIInstance
            .delete('', {
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

    static deleteUsers(data: DataUsersType) {
        return chatAPIInstance
            .delete('/users', {
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

    static addUsers(data: DataUsersType) {
        return chatAPIInstance
            .put('/users', {
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
