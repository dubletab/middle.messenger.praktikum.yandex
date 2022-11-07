import { ChatApi } from '../api/ChatList.api';
import { trim, getAllSiblings } from '../utils/helpers';
import store from '../utils/Store';
import { ChatController } from './message.ctrl';

export class UserChatController {
    static deleteUserFromChat(data: any, form: any, input: any) {
        const arrayUsersId: any[] = [];
        data.users.split(',').forEach((item: any) => {
            arrayUsersId.push(Number(trim(item)));
        });
        data.users = arrayUsersId;

        ChatApi.deleteUsers(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, "User's removed from chat", true);
                input.value = '';
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }

    static addUserFromChat(data: any, form: any, input: any) {
        const arrayUsersId: any = [];
        data.users.split(',').forEach((item: any) => {
            arrayUsersId.push(Number(trim(item)));
        });

        data.users = arrayUsersId;

        ChatApi.addUsers(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, "User's added into chat", true);
                input.value = '';
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }

    static createChat(data: any, form: any, input: any) {
        ChatApi.create(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, 'Chat created', true);
                this.getAllChats();
                input.value = '';
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }

    static deleteChat(data: any, form: any, input: any) {
        ChatApi.delete(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, 'Chat removed', true);
                this.getAllChats();
                console.log(input);
                input.value = '';
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }

    static getAllChats() {
        return ChatApi.request().then((response: any) => {
            store.set('chats', JSON.parse(response.responseText));
            return JSON.parse(response.responseText);
        });
    }

    static setActiveChat(chatItem: any, userId?: any) {
        chatItem.classList.add('active');
        getAllSiblings(chatItem, false).forEach((item: any) => {
            item.classList.remove('active');
        });

        store.set('active.chat', {});

        const activeChatObj: any = this.getActiveChat(store.getState(), chatItem.id);

        if (activeChatObj.id !== store.getState()?.active?.chat?.id) {
            store.set('active.chat', activeChatObj);
            ChatController.createSessionsMessage(chatItem.id, userId);
        }
        // try {
        //     document.querySelector('.message-panel')?.classList.remove('hidden');
        //     document.querySelector('.chat-not-choose')?.classList.add('hidden');
        //     document.querySelector('.top-panel .button-option')?.classList.remove('hidden');
        // } catch (error) {
        //     console.error('setActiveChat queryselectors was not work');
        // }
    }

    static getActiveChat(stateCopy: any, chatId: any) {
        let currentItem;
        stateCopy.chats.forEach((item: any) => {
            if (item.id.toString() === chatId) {
                currentItem = item;
            }
        });
        return currentItem;
    }
}
