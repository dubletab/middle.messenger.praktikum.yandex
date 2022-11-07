import { LoginAPI } from '../api/Login.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import store from '../utils/Store';

const router = new Router('root');

interface LoginFormModel {
    login: string;
    password: string;
}

export class LoginController {
    static login(data: LoginFormModel) {
        LoginAPI.request(data).then((response: any) => {
            if (response.status === 200) {
                UserAPI.request().then((responseData: any) => {
                    if (responseData.status === 200) {
                        console.log('start GO');
                        store.set('user', JSON.parse(responseData.responseText));
                        router.go('/messenger');
                    } else {
                        window.alert('Ошибка авторизации');
                    }
                });
            } else {
                window.alert('Ошибка авторизации');
            }
        });
    }
}
