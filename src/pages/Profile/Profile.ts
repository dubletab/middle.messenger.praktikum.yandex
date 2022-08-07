import WrapperCenterPage from '../../layout/WrapperCenterPage/WrapperCenterPage';
import ProfileForm from '../../containers/ProfileForm/ProfileForm';
import InfoLine from '../../components/InfoLine/InfoLine';

const profileData = [
    new InfoLine('div', {
        item: 'Почта',
        info: 'pochta@yandex.ru',
        id: 'email',
    }),
    new InfoLine('div', { item: 'Логин', info: 'ivanivanov', id: 'login' }),
    new InfoLine('div', { item: 'Имя', info: 'Иван', id: 'first_name' }),
    new InfoLine('div', { item: 'Фамилия', info: 'Иванов', id: 'last_name' }),
    new InfoLine('div', {
        item: 'Имя в чате',
        info: 'Иван',
        id: 'display_name',
    }),
    new InfoLine('div', {
        item: 'Телефон',
        info: '+7 (909) 967 30 30',
        id: 'phone',
    }),
];

const settingsData = [
    new InfoLine('div', { item: 'Изменить данные' }),
    new InfoLine('div', { item: 'Изменить пароль' }),
    new InfoLine('div', {
        item: 'Выйти',
        classNames: 'red-color',
    }),
];

const ProfilePage = new WrapperCenterPage('div', {
    children: new ProfileForm('div', { profileData, settingsData }),
});

export default ProfilePage;
