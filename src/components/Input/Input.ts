import { tpl } from './Input.tpl';
import Block from '../../utils/Block';

import './Input.less';

export default class Input extends Block {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            id: this.props.id,
            type: this.props.type,
        });
    }
}
