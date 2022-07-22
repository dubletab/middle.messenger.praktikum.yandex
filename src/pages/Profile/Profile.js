import tpl from './Profile.hbs';
import InfoLine from '../../components/InfoLine/InfoLine';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

import './Profile.less';

const profileData = [
    InfoLine({ item: 'Почта', info: 'pochta@yandex.ru', id: 'email' }),
    InfoLine({ item: 'Логин', info: 'ivanivanov', id: 'login' }),
    InfoLine({ item: 'Имя', info: 'Иван', id: 'first_name' }),
    InfoLine({ item: 'Фамилия', info: 'Иванов', id: 'last_name' }),
    InfoLine({ item: 'Имя в чате', info: 'Иван', id: 'display_name' }),
    InfoLine({ item: 'Телефон', info: '+7 (909) 967 30 30', id: 'phone' }),
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
