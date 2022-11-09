import { tpl } from './Message.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';
import * as Handlebars from 'handlebars';
import './Message.less';
import { connect } from '../../utils/Connect';
import store from '../../utils/Store';

type TProps = {
    messages: any;
} & TPropsDefault;

Handlebars.registerHelper('isAuthor', (value) => value === store.getState().user?.id);

Handlebars.registerHelper('getTime', (value) => new Date(value).toLocaleTimeString());

class Message extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            messages: this.props.messages,
        });
    }
}

const tempM = [{}];

const MessageWrapState = connect((state) => ({
    messages: state.messages,
}));

const MessageWithState = MessageWrapState(Message);

const MessageState = new MessageWithState({
    messages: tempM,
});

export default MessageState;
