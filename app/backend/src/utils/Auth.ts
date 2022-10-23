import { sign, verify } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import 'dotenv/config';
import ErrorGenerator from './ErrorGenerator';

export default class Auth {
  private secretJwt: string;
  constructor() {
    this.secretJwt = process.env.JWT_SECRET || '';
  }

  public Authentication(payload: IUser) {
    const token = sign(payload, this.secretJwt);
    return token;
  }

  public Authorization(token: string) {
    try {
      const payload = verify(token, this.secretJwt);
      return payload;
    } catch (err) {
      throw new ErrorGenerator(400, 'Invalid token');
    }
  }
}
