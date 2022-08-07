import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import ChangeInfoLine from '../../components/ChangeInfoLine/ChangeInfoLine';
import Validation from '../../utils/Validation';

const templateData = [
    {
        item: 'Почта',
        info: 'pochta@yandex.ru',
        id: 'email',
    },
    {
        item: 'Логин',
        info: 'ivanivanov',
        id: 'login',
    },
    {
        item: 'Имя',
        info: 'Иван',
        id: 'first_name',
    },
    {
        item: 'Фамилия',
        info: 'Иванов',
        id: 'second_name',
    },
    {
        item: 'Имя в чате',
        info: 'Иван',
        id: 'display_name',
    },
    {
        item: 'Телефон',
        info: '+79099673030',
        id: 'phone',
    },
];

const validation = new Validation();

const profileData = templateData.map(el => {
    return new ChangeInfoLine('div', {
        ...el,
        className: 'change-info-line',
        required: true,
        type: el.id === 'phone' ? 'tel' : 'text',
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
                if (event.target.id === 'display_name') {
                    if (!validation.checkEmptyValue(event.target.value)) {
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
            },
        },
    });
});

const ProfileChangePage = new WrapperCenterPage('div', {
    children: new ProfileChangeForm('div', {
        profileData,
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

export default ProfileChangePage;
