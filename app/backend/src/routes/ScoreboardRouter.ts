import { Router } from 'express';
import ScoreboardController from '../controllers/ScoreboardController';

const scoreboardRouter = Router();

scoreboardRouter
  .get('/leaderboard/home', new ScoreboardController().getAllHome)
  .get('/leaderboard/away', new ScoreboardController().getAllAway)
  .get('/leaderboard/', new ScoreboardController().getAll);

export default scoreboardRouter;
