import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileForm from '../../containers/ProfileForm/ProfileForm';
import InfoLine from '../../components/InfoLine/InfoLine';
import { connect } from '../../utils/Connect';
import { UserController } from '../../controllers/profile.ctrl';
import Router from '../../utils/Router';
import Avatar from '../../components/Avatar/Avatar';

const router = new Router('root');
UserController.getUser();

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
    url: `https://ya-praktikum.tech/api/v2/resources${state.user?.avatar}`,
}));

const ProfileWithState = ProfileWrapState(Avatar);

const ProfilePage = new WrapperCenterPage({
    children: new ProfileForm({
        avatar: new ProfileWithState({
            url: '',
            events: {
                change: (event: any) => {
                    const { files }: { files: FileList | null } = event.target as HTMLInputElement;
                    if (!files?.length) {
                        return;
                    }
                    const [file] = files;
                    // console.log(event.target);
                    const formData = new FormData();
                    formData.append('avatar', file);
                    // console.log(formData);
                    UserController.changeUserAvatar(formData);
                },
            },
        }),
        profileData,
        settingsData,
    }),
});

export default ProfilePage;
