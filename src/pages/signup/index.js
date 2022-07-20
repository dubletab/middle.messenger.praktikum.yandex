import tpl from './index.hbs';

import './style.less';

const data = {
    forms: [
        { id: 'email', name: 'Почта', type: 'text' },
        { id: 'login', name: 'Логин', type: 'text' },
        { id: 'firstName', name: 'Имя', type: 'text' },
        { id: 'secondName', name: 'Фамилия', type: 'text' },
        { id: 'phone', name: 'Телефон', type: 'tel' },
        { id: 'password', name: 'Пароль', type: 'password' },
        { id: 'truePassword', name: 'Пароль (еще раз)', type: 'password' },
    ],
};

export default tpl(data);
