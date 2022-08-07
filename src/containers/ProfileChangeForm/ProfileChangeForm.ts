import { tpl } from './ProfileChangeForm.tpl';
import Block from '../../utils/Block';

import './ProfileChangeForm.less';

export default class ProfileChangeForm extends Block {
    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
        });
    }
}
