import tpl from './Profile.hbs';
import InfoLine from '../../components/InfoLine/InfoLine';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

import './Profile.less';

const profileData = [
    InfoLine({ item: 'Почта', info: 'pochta@yandex.ru' }),
    InfoLine({ item: 'Логин', info: 'ivanivanov' }),
    InfoLine({ item: 'Имя', info: 'Иван' }),
    InfoLine({ item: 'Фамилия', info: 'Иванов' }),
    InfoLine({ item: 'Имя в чате', info: 'Иван' }),
    InfoLine({ item: 'Телефон', info: '+7 (909) 967 30 30' }),
];

const settingsData = [
    InfoLine({ item: 'Изменить данные', onClick: () => {} }),
    InfoLine({ item: 'Изменить пароль', onClick: () => {} }),
    InfoLine({ item: 'Выйти', onClick: () => {}, classNames: 'red-color' }),
];

export default props =>
    WrapperCenterPage({
        children: tpl({ profileData, settingsData, ...props }),
    });
