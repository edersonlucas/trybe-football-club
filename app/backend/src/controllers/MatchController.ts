import { NextFunction, Request, Response } from 'express';
import ErrorGenerator from '../utils/ErrorGenerator';
import MatchService from '../services/MatchService';

export default class MatchController {
  private service: MatchService;

  constructor() {
    this.service = new MatchService();
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.finish = this.finish.bind(this);
    this.update = this.update.bind(this);
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.query.inProgress) {
        const matchStatus = req.query.inProgress === 'true';
        const matches = await this.service.getAllByStatus(matchStatus);
        return res.status(200).json(matches);
      }
      const matches = await this.service.getAll();
      return res.status(200).json(matches);
    } catch (err) {
      next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const insertedMatch = await this.service.create(req.body);
      return res.status(201).json(insertedMatch);
    } catch (err) {
      next(err);
    }
  }

  public async finish(req: Request, res: Response, next: NextFunction) {
    try {
      const finish = await this.service.finish(req.params.id);
      if (finish) return res.status(200).json({ message: 'Finished' });
      throw new ErrorGenerator(409, 'There was an error updating status');
    } catch (err) {
      next(err);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const update = await this.service.update(req.body, req.params.id);
      if (update) return res.status(200).json({ message: 'Scoreboard updated successfully!' });
      throw new ErrorGenerator(409, 'There was an error updating scoreboard');
    } catch (err) {
      next(err);
    }
  }
}
