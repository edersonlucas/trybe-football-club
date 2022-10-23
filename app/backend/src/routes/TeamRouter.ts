import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamRouter = Router();

teamRouter
  .get('/teams/:id', new TeamController().getById)
  .get('/teams', new TeamController().getAll);

export default teamRouter;
