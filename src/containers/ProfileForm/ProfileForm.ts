import { tpl } from './ProfileForm.tpl';
import Block from '../../utils/Block';

import './ProfileForm.less';

export default class ProfileForm extends Block {
    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
            settingsData: this.props.settingsData,
        });
    }
}
