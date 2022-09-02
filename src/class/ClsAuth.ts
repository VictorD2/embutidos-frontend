import { IUser } from '@interfaces/auth.interface';
import { ILogin, IRegister } from '@interfaces/login.interface';
import { loginService, registerService } from '@services/auth.service';

class ClsAuth {
  static async login(login: ILogin): Promise<IUser> {
    const res = await loginService(login);
    const { data } = res;
    localStorage.setItem('token', data.token);
    return data.user;
  }

  static async register(register: IRegister): Promise<IUser> {
    const res = await registerService(register);
    const { data } = res;
    localStorage.setItem('token', data.token);
    return data.user;
  }

  static logOut() {
    localStorage.removeItem('token');
  }
}

export default ClsAuth;
