import { tpl } from './Chats.tpl';
import Block from '../../utils/Block';
import ChatItemsState from '../../components/ChatItem/ChatItem';
import MessageTypingForm from '../../containers/MessageTypingForm/MessageTypingForm';
import { TPropsDefault } from '../../utils/Interfaces';

import './Chats.less';
import Router from '../../utils/Router';
import { UserChatController } from '../../controllers/chats.ctrl';
import MessageState from '../../components/Message/Message';
import { ChatController } from '../../controllers/message.ctrl';

type TProps = {} & TPropsDefault;

class Chats extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chatsData: this.props.chatsData,
            messagesData: this.props.messagesData,
            messageTyping: this.props.messageTyping,
        });
    }
}

UserChatController.getAllChats();

const ChatsPage = new Chats({
    chatsData: ChatItemsState,
    messagesData: MessageState,
    events: {
        click: (event: Event) => {
            event.preventDefault();
            const target = event.target as HTMLInputElement;
            if (target.id === 'chats-btn-profile') {
                const router = new Router('root');
                router.go('/profile');
            }
            if (target.id === 'chats-footer--btn') {
                const newChat = document.getElementById('chats-footer--inp') as HTMLInputElement;
                if (newChat.value) UserChatController.createChat(newChat);
            }
        },
    },
    messageTyping: new MessageTypingForm(
        {
            className: 'message-typing-form',
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                    const target = event.target as HTMLFormElement;
                    if (target.classList.contains('message-typing-form-submit')) {
                        const mes = document.getElementById('message') as HTMLInputElement;
                        if (mes.value) {
                            ChatController.sendMessage(mes.value);
                            mes.value = '';
                        }
                    }
                },
            },
        },
        'form',
    ),
});

export default ChatsPage;
