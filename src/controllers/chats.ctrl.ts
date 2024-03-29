import { ChatApi } from '../api/ChatList.api';
import { getAllSiblings } from '../utils/helpers';
import store from '../utils/Store';
import { ChatController } from './message.ctrl';

export class UserChatController {
    static deleteUserFromChat() {
        const userId = window.prompt('Введите ID пользователя для удаления из чата');
        if (!userId) {
            return;
        }
        const data = {
            chatId: store.getState().active.chat.id,
            users: [Number(userId)],
        };

        ChatApi.deleteUsers(data);
    }

    static addUserFromChat() {
        const userId = window.prompt('Введите ID пользователя для добавления в чат');
        if (!userId) {
            return;
        }
        const data = {
            chatId: store.getState().active.chat.id,
            users: [Number(userId)],
        };

        ChatApi.addUsers(data);
    }

    static createChat(input: HTMLInputElement) {
        const data = {
            title: input.value,
        };
        ChatApi.create(data).then((response: any) => {
            if (response.status === 200) {
                this.getAllChats();
                input.value = '';
            }
        });
    }

    static deleteChat() {
        if (!window.confirm('Вы действительно хотите удалить чат?')) {
            return;
        }
        const data = {
            chatId: store.getState().active.chat.id,
        };
        ChatApi.delete(data).then((response: any) => {
            if (response.status === 200) {
                const wrapper = document.querySelector('.chats-wrapper') as HTMLElement;
                wrapper.classList.remove('active');
                this.getAllChats();
            }
        });
    }

    static getAllChats() {
        return ChatApi.request().then((response: any) => {
            try {
                const data = JSON.parse(response.responseText);
                store.set('chats', data);
                return data;
            } catch {
                window.alert('Ошибка парсинга');
            }
        });
    }

    static setActiveChat(chatItem: HTMLElement, userId?: string) {
        chatItem.classList.add('active');
        getAllSiblings(chatItem, false).forEach((item: HTMLElement) => {
            item.classList.remove('active');
        });

        store.set('active.chat', {});

        const activeChatObj: any = this.getActiveChat(chatItem.id);

        if (activeChatObj.id !== store.getState()?.active?.chat?.id) {
            store.set('active.chat', activeChatObj);
            ChatController.createSessionsMessage(chatItem.id, userId);
        }
    }

    static getActiveChat(chatId: string) {
        let currentItem;
        store.getState().chats.forEach((item: any) => {
            if (item.id.toString() === chatId) {
                currentItem = item;
            }
        });
        return currentItem;
    }
}
