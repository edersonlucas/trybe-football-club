import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import ErrorGenerator from '../utils/ErrorGenerator';
import Auth from '../utils/Auth';

interface RequestAuth extends Request {
  user?: JwtPayload | string,
}

export default class AuthMiddleware {
  public static auth(req: RequestAuth, _res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) throw new ErrorGenerator(401, 'Token not found');
    const user = new Auth().Authorization(token);
    req.user = user;
    next();
  }
}
