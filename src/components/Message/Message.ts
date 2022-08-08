import { tpl } from './Message.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './Message.less';

type TProps = {
    text: string;
    time: string;
} & TPropsDefault;

export default class Message extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            text: this.props.text,
            time: this.props.time,
        });
    }
}
