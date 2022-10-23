import Team from '../database/models/Team';

export default class TeamService {
  private model = Team;

  public async getAll(): Promise<Team[]> {
    const teams = await this.model.findAll({ raw: true });
    return teams;
  }

  public async getById(id: string) {
    const team = await this.model.findByPk(id);
    return team;
  }
}
