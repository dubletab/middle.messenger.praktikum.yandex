import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import ChangeInfoLine from '../../components/ChangeInfoLine/ChangeInfoLine';
import Validation from '../../utils/Validation';

const validation = new Validation();

const templateData = [
    {
        item: 'Старый пароль',
        info: '123ZXCv!123',
        id: 'old_password',
    },
    {
        item: 'Новый пароль',
        info: '123ZXCv!',
        id: 'password',
    },
    {
        item: 'Повторите новый пароль',
        info: '123ZXCv!',
        id: 'confirm_password',
    },
];

const profileData = templateData.map(el => {
    return new ChangeInfoLine('div', {
        ...el,
        className: 'change-info-line',
        required: true,
        type: 'password',
        events: {
            focus: event => {
                validation.hideError(event.target);
            },
            blur: event => {
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
                if (event.target.id === 'password') {
                    if (!validation.password(event.target.value)) {
                        validation.showError(event.target);
                    }
                }
            },
        },
    });
});

const PasswordChangePage = new WrapperCenterPage('div', {
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

export default PasswordChangePage;
