import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileForm from '../../containers/ProfileForm/ProfileForm';
import InfoLine from '../../components/InfoLine/InfoLine';
import { connect } from '../../utils/Connect';
import { UserController } from '../../controllers/profile.ctrl';
import Router from '../../utils/Router';
import Avatar from '../../components/Avatar/Avatar';
import { BASE_URL } from '../../api/BaseApi';

const router = new Router('root');

const templateProfileData = [
    {
        item: 'Почта',
        id: 'email',
    },
    { item: 'Логин', id: 'login' },
    { item: 'Имя', id: 'first_name' },
    { item: 'Фамилия', id: 'second_name' },
    {
        item: 'Имя в чате',
        id: 'display_name',
    },
    {
        item: 'Телефон',
        id: 'phone',
    },
];

const profileData = templateProfileData.map((i) => {
    const A = connect((state) => ({
        ...i,
        className: 'info-line',
        info: state.user?.[i.id],
    }));
    const B = A(InfoLine);
    return new B({
        ...i,
        info: '-',
        className: 'info-line',
    });
});

const templateSettingsData = [
    {
        item: 'Изменить данные',
        events: {
            click: () => {
                router.go('/profile-change');
            },
        },
    },
    {
        item: 'Изменить пароль',
        events: {
            click: () => {
                router.go('/password-change');
            },
        },
    },
    {
        item: 'Выйти',
        classNames: 'red-color',
        events: {
            click: () => {
                UserController.logoutUser();
            },
        },
    },
];

const settingsData = templateSettingsData.map(
    (el) =>
        new InfoLine({
            ...el,
            className: 'info-line',
        }),
);

const ProfileWrapState = connect((state) => ({
    url: `${BASE_URL}/resources${state.user?.avatar}`,
}));

const ProfileWithState = ProfileWrapState(Avatar);

const ProfilePage = new WrapperCenterPage({
    backArrow: true,
    children: new ProfileForm({
        avatar: new ProfileWithState({
            url: '',
            events: {
                change: (event: Event) => {
                    const { files }: { files: FileList | null } = event.target as HTMLInputElement;
                    if (!files?.length) {
                        return;
                    }
                    const [file] = files;
                    const formData = new FormData();
                    formData.append('avatar', file);
                    UserController.changeUserAvatar(formData);
                },
            },
        }),
        profileData,
        settingsData,
    }),
    events: {
        click: (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.id === 'back') {
                router.back();
            }
        },
    },
});

export default ProfilePage;
