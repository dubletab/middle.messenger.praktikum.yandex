import { tpl } from './ChangeInfoLine.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './ChangeInfoLine.less';

type TProps = {
    name: string;
    info: string;
    id: string;
    type: string;
    required: boolean;
} & TPropsDefault;

export default class ChangeInfoLine extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            info: this.props.info,
            id: this.props.id,
            type: this.props.type,
            classNames: this.props.classNames,
            required: this.props.required,
        });
    }
}
