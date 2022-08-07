import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';

const forms = [
    new Input('div', { id: 'email', name: 'Почта', type: 'text' }),
    new Input('div', { id: 'login', name: 'Логин', type: 'text' }),
    new Input('div', { id: 'first_name', name: 'Имя', type: 'text' }),
    new Input('div', { id: 'second_name', name: 'Фамилия', type: 'text' }),
    new Input('div', { id: 'phone', name: 'Телефон', type: 'tel' }),
    new Input('div', { id: 'password', name: 'Пароль', type: 'password' }),
    new Input('div', {
        id: 'confirm_password',
        name: 'Пароль (еще раз)',
        type: 'password',
    }),
];

const SignUpPage = new WrapperCenterPage('div', {
    children: new SignForm('div', {
        forms,
        formName: 'Регистрация',
        submitName: 'Зарегистрироваться',
        submitSubName: 'Войти',
        routeSubName: '/',
        id: 'signup',
    }),
});

export default SignUpPage;
