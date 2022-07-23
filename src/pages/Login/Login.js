import tpl from './Login.hbs';
import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

const forms = [
    Input({ id: 'login', name: 'Логин', type: 'text' }),
    Input({ id: 'password', name: 'Пароль', type: 'password' }),
];

const form = SignForm({
    forms,
    formName: 'Вход',
    submitName: 'Авторизоваться',
    submitSubName: 'Нет аккаунта?',
    routeSubName: '/signup',
    id: 'login',
});

export default props =>
    WrapperCenterPage({ children: tpl({ form, ...props }) });
