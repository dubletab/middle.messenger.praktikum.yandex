import tpl from './SignUp.hbs';
import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

const forms = [
    Input({ id: 'email', name: 'Почта', type: 'text' }),
    Input({ id: 'login', name: 'Логин', type: 'text' }),
    Input({ id: 'firstName', name: 'Имя', type: 'text' }),
    Input({ id: 'secondName', name: 'Фамилия', type: 'text' }),
    Input({ id: 'phone', name: 'Телефон', type: 'tel' }),
    Input({ id: 'password', name: 'Пароль', type: 'password' }),
    Input({ id: 'truePassword', name: 'Пароль (еще раз)', type: 'password' }),
];

const form = SignForm({
    forms,
    formName: 'Регистрация',
    submitName: 'Зарегистрироваться',
    submitSubName: 'Войти',
    routeSubName: '/',
    id: 'signup',
});

export default props =>
    WrapperCenterPage({ children: tpl({ form, ...props }) });
