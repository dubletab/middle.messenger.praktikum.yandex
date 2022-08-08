import { tpl } from './Input.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './Input.less';

type TProps = {
    name: string;
    id: string;
    type: string;
    required: boolean;
} & TPropsDefault;

export default class Input extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            id: this.props.id,
            type: this.props.type,
            required: this.props.required,
        });
    }
}
