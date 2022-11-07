import { tpl } from './ChangeInfoLine.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ChangeInfoLine.less';

type TProps = {
    name: string;
    id: string;
    type: string;
    required: boolean;
    info: string;
} & TPropsDefault;

export default class ChangeInfoLine extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            id: this.props.id,
            type: this.props.type,
            className: this.props.className,
            required: this.props.required,
            info: this.props.info,
        });
    }
}
