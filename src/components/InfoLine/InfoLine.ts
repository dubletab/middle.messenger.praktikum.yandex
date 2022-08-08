import { tpl } from './InfoLine.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './InfoLine.less';

type TProps = {
    item: string;
    info?: string;
} & TPropsDefault;

export default class InfoLine extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            classNames: this.props.classNames,
        });
    }
}
