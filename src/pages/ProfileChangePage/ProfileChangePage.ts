import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileChangeForm from '../../containers/ProfileChangeForm/ProfileChangeForm';
import ChangeInfoLine from '../../components/ChangeInfoLine/ChangeInfoLine';
import Validation from '../../utils/Validation';
import { ITempObj } from '../../utils/Interfaces';
import { connect } from '../../utils/Connect';
import { UserController } from '../../controllers/profile.ctrl';

const templateData = [
    {
        name: 'Почта',
        id: 'email',
    },
    {
        name: 'Логин',
        id: 'login',
    },
    {
        name: 'Имя',
        id: 'first_name',
    },
    {
        name: 'Фамилия',
        id: 'second_name',
    },
    {
        name: 'Имя в чате',
        id: 'display_name',
    },
    {
        name: 'Телефон',
        id: 'phone',
    },
];

const validation = new Validation();

const profileData = templateData.map((i) => {
    const A = connect((state) => ({
        ...i,
        required: true,
        className: 'change-info-line',
        type: i.id === 'phone' ? 'tel' : 'text',
        info: state.user?.[i.id],
    }));
    const B = A(ChangeInfoLine);
    return new B({
        info: '-',
        ...i,
        className: 'change-info-line',
        required: true,
        type: i.id === 'phone' ? 'tel' : 'text',
        events: {
            focus: (event: Event) => {
                validation.hideError(event.target as HTMLInputElement);
            },
            blur: (event: Event) => {
                const target = event.target as HTMLInputElement;
                if (target.id === 'login') {
                    if (!validation.login(target.value)) {
                        validation.showError(target);
                    }
                }
                if (target.id === 'email') {
                    if (!validation.email(target.value)) {
                        validation.showError(target);
                    }
                }
                if (target.id === 'phone') {
                    if (!validation.phone(target.value)) {
                        validation.showError(target);
                    }
                }
                if (target.id === 'display_name') {
                    if (!validation.checkEmptyValue(target.value)) {
                        validation.showError(target);
                    }
                }
                if (target.id === 'first_name' || target.id === 'second_name') {
                    if (!validation.names(target.value)) {
                        validation.showError(target);
                    }
                }
            },
        },
    });
});

const ProfileChangePage = new WrapperCenterPage({
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
                        data[current.id] = current.value;
                    });
                    UserController.changeUserProfileData(data);
                    console.log(data);
                }
            },
        },
    }),
});

export default ProfileChangePage;
