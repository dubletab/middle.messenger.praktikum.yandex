import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import Validation from '../../utils/Validation';

const templateForm = [
    { id: 'login', name: 'Логин', type: 'text' },
    { id: 'password', name: 'Пароль', type: 'password' },
];
const validation = new Validation();

const forms = templateForm.map(el => {
    return new Input('div', {
        ...el,
        required: true,
        events: {
            focus: event => {
                validation.hideError(event.target);
            },
            blur: event => {
                if (event.target.id === 'login') {
                    if (!validation.login(event.target.value)) {
                        validation.showError(event.target);
                    }
                }
                if (event.target.id === 'password') {
                    if (!validation.password(event.target.value)) {
                        validation.showError(event.target);
                    }
                }
            },
        },
    });
});

const LoginPage = new WrapperCenterPage('div', {
    children: new SignForm('div', {
        forms,
        formName: 'Вход',
        submitName: 'Авторизоваться',
        submitSubName: 'Нет аккаунта?',
        routeSubName: '/signup',
        id: 'login',
        events: {
            submit: event => {
                event.preventDefault();
                if (validation.check(event.target)) {
                    const inputFields = event.target.querySelectorAll(
                        '[data-required=true]',
                    );
                    const data = {};
                    inputFields.forEach(current => {
                        data[current.id] = current.value;
                    });
                    console.log(data);
                }
            },
        },
    }),
});

export default LoginPage;
