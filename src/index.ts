import ProfilePage from './pages/Profile/Profile';
import Error404Page from './pages/Error404/Error404';
import Error500Page from './pages/Error500/Error500';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/SignUp/SignUp';
import ChatsPage from './pages/Chats/Chats';
import PasswordChangePage from './pages/PasswordChangePage/PasswordChangePage';
import ProfileChangePage from './pages/ProfileChangePage/ProfileChangePage';
import Router from './utils/Router';

import './style.less';
import './reworkStyles.less';

const router = new Router('root');

router
    .use('/', LoginPage)
    .use('/500', Error500Page)
    .use('/signup', SignupPage)
    .use('/messenger', ChatsPage)
    .use('/profile', ProfilePage)
    .use('/profile-change', ProfileChangePage)
    .use('/password-change', PasswordChangePage)
    .use('*', Error404Page)
    .start();

// const path = window.location.pathname;
//
// switch (path) {
//     case '/':
//         renderDOM('root', ChatsPage);
//         break;
//     case '/login':
//         renderDOM('root', LoginPage);
//         break;
//     case '/profile':
//         renderDOM('root', ProfilePage);
//         break;
//     case '/signup':
//         renderDOM('root', SignupPage);
//         break;
//     case '/password-change':
//         renderDOM('root', PasswordChangePage);
//         break;
//     case '/profile-change':
//         renderDOM('root', ProfileChangePage);
//         break;
//     case '/500':
//         renderDOM('root', Error500Page);
//         break;
//     default:
//         renderDOM('root', Error404Page);
// }
//
// // пока отсутствует роутинг
// const devNavigate = document.getElementById('devNavigate');
// if (devNavigate instanceof HTMLSelectElement) {
//     devNavigate.addEventListener('change', () => (window.location.href = devNavigate.value));
// }
//
// const navArray = [
//     { path: '/', name: 'mainPage' },
//     { path: '/login', name: 'loginPage' },
//     { path: '/signup', name: 'signupPage' },
//     { path: '/profile', name: 'profilePage' },
//     { path: '/password-change', name: 'changePassPage' },
//     { path: '/profile-change', name: 'changeProfilePage' },
//     { path: '/500', name: 'error500Page' },
//     { path: '/incorrectName', name: 'error404Page' },
// ];
//
// navArray.forEach((item) => {
//     const option = document.createElement('option');
//     option.value = item.path;
//     if (item.path === window.location.pathname) {
//         // @ts-ignore
//         option.selected = 'selected';
//     }
//     option.textContent = item.name;
//     if (devNavigate instanceof HTMLSelectElement) {
//         devNavigate.append(option);
//     }
// });
