import { tpl } from './WrapperCenterPage.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './WrapperCenterPage.less';

type TProps = {} & TPropsDefault;

export default class WrapperCenterPage extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            children: this.children,
            backArrow: this.props.backArrow,
        });
    }
}
