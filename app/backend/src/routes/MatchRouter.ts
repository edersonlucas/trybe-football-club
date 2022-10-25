import { Router } from 'express';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import MatchController from '../controllers/MatchController';

const matchRouter = Router();

matchRouter
  .get('/matches', new MatchController().getAll)
  .post('/matches', AuthMiddleware.auth, new MatchController().create)
export default matchRouter;
