import './style.less';
import ProfilePage from './pages/profile/index.js';
import Error404Page from './pages/error404/index.js';
import Error500Page from './pages/error500/index.js';
import LoginPage from './pages/login/index.js';
import SignupPage from './pages/signup/index.js';
import ChatsPage from './pages/chats/index.js';

const root = document.getElementById('root');

root.innerHTML = SignupPage;
