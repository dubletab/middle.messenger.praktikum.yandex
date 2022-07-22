import tpl from './SignUp.hbs';
import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

const forms = [
    Input({ id: 'email', name: 'Почта', type: 'text' }),
    Input({ id: 'login', name: 'Логин', type: 'text' }),
    Input({ id: 'first_name', name: 'Имя', type: 'text' }),
    Input({ id: 'second_name', name: 'Фамилия', type: 'text' }),
    Input({ id: 'phone', name: 'Телефон', type: 'tel' }),
    Input({ id: 'password', name: 'Пароль', type: 'password' }),
    Input({
        id: 'confirm_password',
        name: 'Пароль (еще раз)',
        type: 'password',
    }),
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
