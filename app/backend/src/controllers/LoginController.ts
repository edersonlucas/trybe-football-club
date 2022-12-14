import { NextFunction, Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import LoginService from '../services/LoginService';

interface RequestValidation extends Request {
  user?: IUser,
}

export default class LoginController {
  private service: LoginService;
  constructor() {
    this.service = new LoginService();
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.service.login(req.body);
      return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }

  public static async validation(req: RequestValidation, res: Response) {
    return res.status(200).json({ role: req.user?.role });
  }
}
