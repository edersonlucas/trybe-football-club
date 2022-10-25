import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchRouter = Router();

matchRouter
  .get('/matches', new MatchController().getAll)
export default matchRouter;
