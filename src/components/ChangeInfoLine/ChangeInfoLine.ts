import { tpl } from './ChangeInfoLine.tpl';
import Block from '../../utils/Block';

import './ChangeInfoLine.less';

export default class ChangeInfoLine extends Block {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            id: this.props.id,
            classNames: this.props.classNames,
            required: this.props.required,
        });
    }
}
