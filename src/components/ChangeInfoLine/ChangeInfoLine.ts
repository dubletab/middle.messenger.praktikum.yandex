import { tpl } from './ChangeInfoLine.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ChangeInfoLine.less';

type TProps = {
    item: string;
    info: string;
    id: string;
    type: string;
    required: boolean;
} & TPropsDefault;

export default class ChangeInfoLine extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            id: this.props.id,
            type: this.props.type,
            classNames: this.props.classNames,
            required: this.props.required,
        });
    }
}
