import { UserAPI } from '../api/User.api';
import { LogOutAPI } from '../api/Logout.api';
import store from '../utils/Store';
import Router from '../utils/Router';
import { AvatarAPI } from '../api/Avatar.api';
import { ChangeUserInfoAPI } from '../api/ChangeUserInfo.api';
import { ChangeUserPwdAPI } from '../api/ChangeUserPass.api';
// import { displayFormLog } from '../formLogger';

const router = new Router('root');

export class UserController {
    static getUser() {
        UserAPI.request().then((data: any) => {
            store.set('user', JSON.parse(data.responseText));
        });
    }

    static logoutUser() {
        LogOutAPI.request().then(() => {
            router.go('/');
        });
    }

    static changeUserAvatar(data: any) {
        AvatarAPI.change(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, 'Avatar was changed!', true);
                this.getUser();
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }

    static changeUserProfileData(data: any) {
        ChangeUserInfoAPI.change(data).then((response: any) => {
            if (response.status === 200) {
                // displayFormLog(form, 'Profile data was changed!', true);
                this.getUser();
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }

    static changeUserPassword(data: any) {
        ChangeUserPwdAPI.change(data).then((response: any) => {
            if (response.status === 200) {
                console.log('sucsus');
                // displayFormLog(form, 'Succsessfull', true);
            } else {
                // displayFormLog(form, JSON.parse(response.responseText).reason, false);
            }
        });
    }
}
