import { tpl } from './ChatItem.temp';
import Block from '../../utils/Block';

import './ChatItem.less';

export default class ChatItem extends Block {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            message: this.props.message,
            time: this.props.time,
            newMessages: this.props.newMessages,
            logo: this.props.logo,
        });
    }
}
