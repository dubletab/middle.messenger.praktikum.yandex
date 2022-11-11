import { tpl } from './Message.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';
import './Message.less';
import { connect } from '../../utils/Connect';
import store from '../../utils/Store';

const Handlebars = require('handlebars/dist/cjs/handlebars');

type TProps = {
    messages: any;
} & TPropsDefault;

Handlebars.registerHelper('isAuthor', (value: string) => value === store.getState().user?.id);

Handlebars.registerHelper('getTime', (value: string) => new Date(value).toLocaleTimeString());

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
