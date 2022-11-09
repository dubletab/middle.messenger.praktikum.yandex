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
import { LoginController } from './controllers/login.ctrl';

const router = new Router('root');

router
    .setUnprotectedPaths(['/', '/signup'])
    .onRoute(LoginController.checkAuth)
    .onNotRoute(LoginController.checkNotAuth)
    .use('/', LoginPage)
    .use('/500', Error500Page)
    .use('/signup', SignupPage)
    .use('/messenger', ChatsPage)
    .use('/profile', ProfilePage)
    .use('/profile-change', ProfileChangePage)
    .use('/password-change', PasswordChangePage)
    .use('*', Error404Page)
    .start();
