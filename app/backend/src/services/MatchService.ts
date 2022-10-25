import ErrorGenerator from '../utils/ErrorGenerator';
import MatchDTO from '../interfaces/MatchDTO';
import Match from '../database/models/Match';
import Team from '../database/models/Team';

export default class MatchService {
  private model = Match;
  private teamModel = Team;

  private async existTeamsIds(ids: number[]) {
    const teamsFound = await Promise.all(ids.map(async (id) => this.teamModel.findByPk(id)));
    return teamsFound.includes(null);
  }

  public async getAll() {
    const matches = await this.model.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  public async getAllByStatus(matchStatus: boolean) {
    const matches = await this.model.findAll({
      where: { inProgress: matchStatus },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  public async create(match: MatchDTO) {
    const { homeTeam, awayTeam } = match;
    if (homeTeam === awayTeam) {
      throw new ErrorGenerator(422, 'It is not possible to create a match with two equal teams');
    }
    if (await this.existTeamsIds([homeTeam, awayTeam])) {
      throw new ErrorGenerator(404, 'There is no team with such id!');
    }
    const payload = {
      ...match,
      inProgress: true,
    };
    const insertedMatch = await this.model.create(payload);
    return insertedMatch;
  }

  public async finish(id: string) {
    const [finished] = await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return finished;
  }

  public async update(scoreboard: { homeTeamGoals: number, awayTeamGoals: number }, id: string) {
    const { homeTeamGoals, awayTeamGoals } = scoreboard;
    const [updated] = await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return updated;
  }
}
