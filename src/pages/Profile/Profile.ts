import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileForm from '../../containers/ProfileForm/ProfileForm';
import InfoLine from '../../components/InfoLine/InfoLine';

const templateProfileData = [
    {
        item: 'Почта',
        info: 'pochta@yandex.ru',
        id: 'email',
    },
    { item: 'Логин', info: 'ivanivanov', id: 'login' },
    { item: 'Имя', info: 'Иван', id: 'first_name' },
    { item: 'Фамилия', info: 'Иванов', id: 'last_name' },
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

const profileData = templateProfileData.map(el => {
    return new InfoLine('div', {
        ...el,
        className: 'info-line',
    });
});

const templateSettingsData = [
    { item: 'Изменить данные' },
    { item: 'Изменить пароль' },
    {
        item: 'Выйти',
        classNames: 'red-color',
    },
];

const settingsData = templateSettingsData.map(el => {
    return new InfoLine('div', {
        ...el,
        className: 'info-line',
    });
});

const ProfilePage = new WrapperCenterPage('div', {
    children: new ProfileForm('div', { profileData, settingsData }),
});

export default ProfilePage;
