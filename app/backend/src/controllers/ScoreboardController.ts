import { NextFunction, Request, Response } from 'express';
import ScoreboardService from '../services/ScoreboardService';

export default class ScoreboardController {
  private service: ScoreboardService;
  constructor() {
    this.service = new ScoreboardService();
    this.getAll = this.getAll.bind(this);
    this.getAllHome = this.getAllHome.bind(this);
    this.getAllAway = this.getAllAway.bind(this);
  }

  public async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const scores = await this.service.getAll();
      return res.status(200).json(scores);
    } catch (err) {
      next(err);
    }
  }

  public async getAllHome(_req: Request, res: Response, next: NextFunction) {
    try {
      const scores = await this.service.getAllHome();
      return res.status(200).json(scores);
    } catch (err) {
      next(err);
    }
  }

  public async getAllAway(_req: Request, res: Response, next: NextFunction) {
    try {
      const scores = await this.service.getAllAway();
      return res.status(200).json(scores);
    } catch (err) {
      next(err);
    }
  }
}
