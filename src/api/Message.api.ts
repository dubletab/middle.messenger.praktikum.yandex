import HTTPTransport from '../utils/HTTPTransport';
import { BASE_URL, BaseAPI } from './BaseApi';

const chatMessagesAPIInstance = new HTTPTransport(`${BASE_URL}/chats/token`);

export class ChatMessagesAPI extends BaseAPI {
    static request(id: string) {
        return chatMessagesAPIInstance
            .post(`/${id}`, {
                credentials: 'include',
                mode: 'cors',
            })
            .catch((e) => {
                const message = e.message ? e.message : 'Ошибка запроса';
                window.alert(message);
            });
    }
}
