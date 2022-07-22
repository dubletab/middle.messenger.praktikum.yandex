import ProfilePage from './pages/Profile/Profile.js';
import ErrorPage from './pages/Error/Error.js';
import LoginPage from './pages/Login/Login.js';
import SignupPage from './pages/SignUp/SignUp.js';
import ChatsPage from './pages/Chats/Chats.js';
import ChangePass from './pages/ChangePass/ChangePass';

import './style.less';

const root = document.getElementById('root');

const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = ChatsPage();
        break;
    case '/login':
        root.innerHTML = LoginPage();
        break;
    case '/signup':
        root.innerHTML = SignupPage();
        break;
    case '/profile':
        root.innerHTML = ProfilePage();
        break;
    case '/changepass':
        root.innerHTML = ChangePass();
        break;
    case '/500':
        root.innerHTML = ErrorPage({
            errorNumber: 500,
            errorMessage: 'Мы уже фиксим',
        });
        break;
    default:
        root.innerHTML = ErrorPage({
            errorNumber: 404,
            errorMessage: 'Не туда попали',
        });
}

//пока отсутствует роутинг
const devNavigate = document.getElementById('devNavigate');
devNavigate.addEventListener(
    'change',
    () => (window.location.href = devNavigate.value),
);

const navArray = [
    { path: '/', name: 'mainPage' },
    { path: '/login', name: 'loginPage' },
    { path: '/signup', name: 'signupPage' },
    { path: '/profile', name: 'profilePage' },
    { path: '/changepass', name: 'changePassPage' },
    { path: '/500', name: 'error500Page' },
    { path: '/incorrectName', name: 'error404Page' },
];

navArray.forEach(item => {
    const option = document.createElement('option');
    option.value = item.path;
    if (item.path === window.location.pathname) {
        option.selected = 'selected';
    }
    option.textContent = item.name;
    devNavigate.append(option);
});
