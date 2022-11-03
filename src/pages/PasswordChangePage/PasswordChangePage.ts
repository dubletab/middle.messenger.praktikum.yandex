import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import ChangeInfoLine from '../../components/ChangeInfoLine/ChangeInfoLine';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';
import { UserController } from '../../controllers/profile.ctrl';

const validation = new Validation();

const templateData = [
    {
        name: 'Старый пароль',
        id: 'old_password',
    },
    {
        name: 'Новый пароль',
        id: 'password',
    },
    {
        name: 'Повторите новый пароль',
        id: 'confirm_password',
    },
];

const profileData = templateData.map(
    (el) =>
        new ChangeInfoLine({
            ...el,
            className: 'change-info-line',
            required: true,
            type: 'password',
            info: '',
            events: {
                focus: (event: Event) => {
                    validation.hideError(event.target as HTMLInputElement);
                },
                blur: (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    if (target.id === 'confirm_password') {
                        if (!validation.confirmPassword(target, target.value)) {
                            validation.showError(target);
                        }
                    }
                    if (target.id === 'password') {
                        if (!validation.password(target.value)) {
                            validation.showError(target);
                        }
                    }
                },
            },
        }),
);

const PasswordChangePage = new WrapperCenterPage({
    children: new ProfileChangeForm({
        profileData,
        events: {
            submit: (event: Event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement;
                if (validation.check(target)) {
                    const inputFields = target.querySelectorAll('[data-required=true]');
                    const data: ITempObj = {};
                    inputFields.forEach((current: HTMLInputElement) => {
                        if (current.id === 'password') {
                            data.newPassword = current.value;
                        } else if (current.id === 'old_password') {
                            data.oldPassword = current.value;
                        }
                    });
                    UserController.changeUserPassword(data);
                    console.log(data);
                }
            },
        },
    }),
});

export default PasswordChangePage;
