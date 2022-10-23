import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  private service: TeamService;

  constructor() {
    this.service = new TeamService();
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  public async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.service.getAll();
      return res.status(200).json(teams);
    } catch (err) {
      next(err);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const team = await this.service.getById(req.params.id);
      return res.status(200).json(team);
    } catch (err) {
      next(err);
    }
  }
}
