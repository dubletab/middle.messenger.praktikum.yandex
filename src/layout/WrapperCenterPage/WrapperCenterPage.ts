import { tpl } from './WrapperCenterPage.tpl';
import Block from '../../utils/Block';

import './WrapperCenterPage.less';

export default class WrapperCenterPage extends Block {
    render() {
        return this.compile(tpl, {
            children: this.children,
        });
    }
}
