import Input from '../../components/Input/Input';
import SignForm from '../../containers/SignForm/SignForm';
import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import Validation from '../../utils/Validation';

const templateForm = [
    { id: 'email', name: 'Почта', type: 'text', required: true },
    { id: 'login', name: 'Логин', type: 'text', required: true },
    { id: 'first_name', name: 'Имя', type: 'text', required: true },
    { id: 'second_name', name: 'Фамилия', type: 'text', required: true },
    { id: 'phone', name: 'Телефон', type: 'tel', required: true },
    { id: 'password', name: 'Пароль', type: 'password', required: true },
    {
        id: 'confirm_password',
        name: 'Пароль (еще раз)',
        type: 'password',
        required: true,
    },
];

const validation = new Validation();

const forms = templateForm.map(el => {
    return new Input('div', {
        ...el,
        events: el?.required
            ? {
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
                      if (event.target.id === 'email') {
                          if (!validation.email(event.target.value)) {
                              validation.showError(event.target);
                          }
                      }
                      if (event.target.id === 'phone') {
                          if (!validation.phone(event.target.value)) {
                              validation.showError(event.target);
                          }
                      }
                      if (
                          event.target.id === 'first_name' ||
                          event.target.id === 'second_name'
                      ) {
                          if (!validation.names(event.target.value)) {
                              validation.showError(event.target);
                          }
                      }
                      if (event.target.id === 'confirm_password') {
                          if (
                              !validation.confirmPassword(
                                  event.target,
                                  event.target.value,
                              )
                          ) {
                              validation.showError(event.target);
                          }
                      }
                  },
              }
            : {},
    });
});

const SignUpPage = new WrapperCenterPage('div', {
    children: new SignForm('div', {
        forms,
        formName: 'Регистрация',
        submitName: 'Зарегистрироваться',
        submitSubName: 'Войти',
        routeSubName: '/',
        id: 'signup',
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

export default SignUpPage;
