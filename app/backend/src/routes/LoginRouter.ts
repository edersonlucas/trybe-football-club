import { Router } from 'express';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/LoginMiddleware';

const loginRouter = Router();

loginRouter
  .post('/login', LoginMiddleware.login, new LoginController().login)

export default loginRouter;
