import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

const forms = [
    new Input('div', { id: 'login', name: 'Логин', type: 'text' }),
    new Input('div', {
        id: 'password',
        name: 'Пароль',
        type: 'password',
    }),
];

const LoginPage = new WrapperCenterPage('div', {
    children: new SignForm('div', {
        forms,
        formName: 'Вход',
        submitName: 'Авторизоваться',
        submitSubName: 'Нет аккаунта?',
        routeSubName: '/signup',
        id: 'login',
    }),
});

export default LoginPage;
