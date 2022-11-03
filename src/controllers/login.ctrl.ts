import { LoginAPI } from '../api/Login.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
import { displayFormLog } from '../utils/helpers';
import store from '../utils/Store';

const router = new Router('root');

interface LoginFormModel {
    login: string;
    password: string;
}

export class LoginController {
    static login(data: LoginFormModel, form: HTMLFormElement) {
        // console.log(data, form);
        LoginAPI.request(data).then((response: any) => {
            // console.log(response);
            if (response.status === 200) {
                displayFormLog(form, 'Succsessfull', true);
                UserAPI.request().then((responseData: any) => {
                    if (responseData.status === 200) {
                        console.log('start GO');
                        store.set('user', JSON.parse(responseData.responseText));
                        router.go('/messenger');
                    } else {
                        displayFormLog(form, JSON.parse(responseData.responseText).reason, false);
                    }
                });
            } else {
                displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }
}
