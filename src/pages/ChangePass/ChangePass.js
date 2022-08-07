import tpl from './ChangePass.hbs';
import InfoLine from '../../components/InfoLine/InfoLine';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage.tpl';

import './ChangePass.less';

const profileData = [
    InfoLine({
        item: 'Старый пароль',
        info: '.........',
        id: 'oldPassword',
    }),
    InfoLine({ item: 'Новый пароль', info: '............', id: 'newPassword' }),
    InfoLine({
        item: 'Повторите новый пароль',
        info: '............',
        id: 'confirmNewPassword',
    }),
];

export default props =>
    WrapperCenterPage({
        children: tpl({ profileData, ...props }),
    });
