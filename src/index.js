import ProfilePage from './pages/Profile/Profile';
import Error404Page from './pages/Error404/Error404';
import Error500Page from './pages/Error500/Error500';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/SignUp/SignUp';
import ChatsPage from './pages/Chats/Chats.js';
// import ChangePass from './pages/ChangePass/ChangePass';
import renderDOM from './utils/renderDOM';

import './style.less';

const path = window.location.pathname;

switch (path) {
    case '/':
        // root.innerHTML = ChatsPage();
        break;
    case '/login':
        renderDOM('root', LoginPage);
        break;
    case '/profile':
        renderDOM('root', ProfilePage);
        break;
    case '/signup':
        renderDOM('root', SignupPage);
        break;
    case '/changepass':
        // root.innerHTML = ChangePass();
        break;
    case '/500':
        renderDOM('root', Error500Page);
        // root.innerHTML = ErrorPage({
        //     errorNumber: 500,
        //     errorMessage: 'Мы уже фиксим',
        // });
        break;
    default:
        renderDOM('root', Error404Page);
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
