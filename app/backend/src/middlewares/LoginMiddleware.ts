import { Request, Response, NextFunction } from 'express';
import loginValidation from './validations/loginValidation';

export default class LoginMiddleware {
  public static login(req: Request, _res: Response, next: NextFunction) {
    loginValidation(req.body);
    next();
  }
}
