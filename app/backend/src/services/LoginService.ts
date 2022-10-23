import IUser from '../interfaces/IUser';
import User from '../database/models/User';
import ILogin from '../interfaces/ILogin';
import Auth from '../utils/Auth';
import Cryptography from '../utils/Cryptography';
import ErrorGenerator from '../utils/ErrorGenerator';

export default class LoginService {
  private model = User;

  private async userExist(userLogin: ILogin): Promise<IUser | undefined> {
    const { email, password } = userLogin;
    const payload = await this.model.findOne({
      where: { email },
      raw: true,
    });
    if (payload) {
      const isValidPassword = Cryptography.validate(password, payload.password);
      if (isValidPassword) {
        return {
          id: payload.id,
          username: payload.username,
          role: payload.role,
          email: payload.email,
        };
      }
    }
  }

  public async login(userLogin: ILogin) {
    const payload = await this.userExist(userLogin);
    if (payload) {
      const token = new Auth().Authentication(payload);
      return token;
    }
    throw new ErrorGenerator(401, 'Incorrect email or password');
  }
}
