import { Router } from 'express';
import ScoreboardController from '../controllers/ScoreboardController';

const scoreboardRouter = Router();

scoreboardRouter
  .get('/leaderboard/home', new ScoreboardController().getAllHome)
export default scoreboardRouter;
