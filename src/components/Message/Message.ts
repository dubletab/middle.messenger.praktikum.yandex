import { tpl } from './Message.tpl';
import Block from '../../utils/Block';

import './Message.less';

export default class Message extends Block {
    render() {
        return this.compile(tpl, {
            text: this.props.text,
            time: this.props.time,
        });
    }
}
