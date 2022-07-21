import ProfilePage from './pages/Profile/Profile.js';
import ErrorPage from './pages/Error/Error.js';
import LoginPage from './pages/Login/Login.js';
import SignupPage from './pages/SignUp/SignUp.js';
import ChatsPage from './pages/Chats/Chats.js';

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
