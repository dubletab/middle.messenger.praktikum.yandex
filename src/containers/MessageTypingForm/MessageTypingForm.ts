import { tpl } from './MessageTypingForm.tpl';
import Block from '../../utils/Block';

import './MessageTypingForm.less';

export default class MessageTypingForm extends Block {
    render() {
        return this.compile(tpl, {});
    }
}
