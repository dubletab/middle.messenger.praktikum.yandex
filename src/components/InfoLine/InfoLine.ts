import { tpl } from './InfoLine.tpl';
import Block from '../../utils/Block';

import './InfoLine.less';

export default class InfoLine extends Block {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            classNames: this.props.classNames,
        });
    }
}
