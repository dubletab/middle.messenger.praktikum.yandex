import { tpl } from './ErrorPageBlock.tpl';
import Block from '../../utils/Block';

import './ErrorPageBlock.less';

export default class ErrorPageBlock extends Block {
    render() {
        return this.compile(tpl, {
            errorNumber: this.props.errorNumber,
            errorMessage: this.props.errorMessage,
        });
    }
}
