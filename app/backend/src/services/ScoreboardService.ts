import { Op } from 'sequelize';
import IScoreboard from '../interfaces/IScoreboard';
import Match from '../database/models/Match';
import Team from '../database/models/Team';
import scoreboardGenerator from '../helpers/scoreboardHelper';
import arrayLimiter from '../helpers/arrayLimiter';
import sortScores from '../helpers/sortScores';

export default class ScoreboardService {
  private model = Match;
  private teamModel = Team;

  public async getAll() {
    const teams = await this.teamModel.findAll();
    const scores: IScoreboard[] = await Promise.all(
      teams.map(async (team) => {
        const teamGames = await this.model.findAll({
          where: {
            inProgress: false,
            [Op.or]: [{ homeTeam: team.id }, { awayTeam: team.id }],
          },
        });
        return {
          name: team.teamName,
          ...scoreboardGenerator(teamGames, team.id),
        };
      }),
    );

    const sortedScores = sortScores(scores);
    return arrayLimiter(sortedScores, 10);
  }

  public async getAllHome() {
    const teams = await this.teamModel.findAll();
    const scores: IScoreboard[] = await Promise.all(
      teams.map(async (team) => {
        const teamGames = await this.model.findAll({
          where: {
            inProgress: false,
            homeTeam: team.id,
          },
        });
        return {
          name: team.teamName,
          ...scoreboardGenerator(teamGames, team.id),
        };
      }),
    );

    const sortedScores = sortScores(scores);
    return arrayLimiter(sortedScores, 10);
  }

  public async getAllAway() {
    const teams = await this.teamModel.findAll();
    const scores: IScoreboard[] = await Promise.all(
      teams.map(async (team) => {
        const teamGames = await this.model.findAll({
          where: {
            inProgress: false,
            awayTeam: team.id,
          },
        });
        return {
          name: team.teamName,
          ...scoreboardGenerator(teamGames, team.id),
        };
      }),
    );
    const sortedScores = sortScores(scores);
    return arrayLimiter(sortedScores, 10);
  }
}
