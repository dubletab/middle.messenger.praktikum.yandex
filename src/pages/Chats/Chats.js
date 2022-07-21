import tpl from './Chats.hbs';
import Input from '../../components/Input/Input';

import './Chats.less';

const chatData = [
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
    { name: '', message: '', time: '', newMessages: 0, logo: '' },
];

export default props => tpl({ chatData, ...props });
