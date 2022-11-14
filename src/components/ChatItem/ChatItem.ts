import { tpl } from './ChatItem.temp';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';
import { connect } from '../../utils/Connect';
import { UserChatController } from '../../controllers/chats.ctrl';
import './ChatItem.less';
import store from '../../utils/Store';

const Handlebars = require('handlebars/dist/cjs/handlebars');

type TProps = {
    chats: any;
} & TPropsDefault;

Handlebars.registerHelper('getTime', (value: string) => new Date(value).toLocaleTimeString());

class ChatItems extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
        });
    }
}

const tempCI = [{}];

const ChatItemsWrapState = connect((state) => ({
    chats: state.chats,
}));

const ChatItemsWithState = ChatItemsWrapState(ChatItems);

const ChatItemsState = new ChatItemsWithState({
    chats: tempCI,
    events: {
        click: (event: any) => {
            const parent = event.target.closest('.chat-item');
            if (!parent.classList.contains('active')) {
                UserChatController.setActiveChat(parent, store.getState().user.id);
                const mes = document.getElementById('message') as HTMLTextAreaElement;
                mes.value = '';
            }
            const wrapper = event.target.closest('.chats-wrapper');
            if (!wrapper.classList.contains('active')) {
                wrapper.classList.add('active');
            }
        },
    },
});

export default ChatItemsState;
