import { SignUpAPI } from '../api/SignUp.api';
import Router from '../utils/Router';
import { UserAPI } from '../api/User.api';
// import { displayFormLog } from '../utils/helpers';
import store from '../utils/Store';

const router = new Router('root');

interface RegFormModel {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
}

export class UserSignUpController {
    static registration(data: RegFormModel) {
        SignUpAPI.create(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, 'Succsessfull', true);
                UserAPI.request().then((responseData: any) => {
                    if (responseData.status === 200) {
                        store.set('user', JSON.parse(responseData.responseText));
                        router.go('/messenger');
                    } else {
                        // displayFormLog(form, JSON.parse(responseData.responseText).reason, false);
                    }
                });
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }
}
