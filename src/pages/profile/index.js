import tpl from './index.hbs';

import './style.less';

const data = {
    profileData: [
        { item: 'Почта', info: 'pochta@yandex.ru' },
        { item: 'Логин', info: 'ivanivanov' },
        { item: 'Имя', info: 'Иван' },
        { item: 'Фамилия', info: 'Иванов' },
        { item: 'Имя в чате', info: 'Иван' },
        { item: 'Телефон', info: '+7 (909) 967 30 30' },
    ],
};

export default tpl(data);
