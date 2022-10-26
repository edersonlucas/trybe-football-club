import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';
import Match from '../database/models/Match';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { 
  findAllTeamMock,
  findAllMatchMock,
  getAllResponse,
  findAllMatchHomeMock,
  getAllHomeResponse,
  findAllMatchAwayMock,
  getAllAwayResponse,
  errorResponse,
} from './mocks/scoreboard.mock'

describe('GET /leaderboard', () => {

  describe('Quando quando é feita uma requisição para a rota', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(findAllTeamMock as Team[]);
    sinon
      .stub(Match, 'findAll')
      .resolves(findAllMatchMock as Match[]);
    });
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    (Match.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/leaderboard');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(getAllResponse)
    })
  })

  describe('Quando quando é feita uma requisição para a rota e acontece um erro', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .callsFake(() => {
        throw new Error('Erro interno sequelize')
      })
    })
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/leaderboard/');
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponse)
    })
})

})

describe('GET /leaderboard/home', () => {

  describe('Quando quando é feita uma requisição para a rota', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(findAllTeamMock as Team[]);
    sinon
      .stub(Match, 'findAll')
      .resolves(findAllMatchHomeMock as Match[]);
    });
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    (Match.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/leaderboard/home');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(getAllHomeResponse)
    })
  })

  describe('Quando quando é feita uma requisição para a rota e acontece um erro', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .callsFake(() => {
        throw new Error('Erro interno sequelize')
      })
    })
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/leaderboard/home');
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponse)
    })
  })
})

describe('GET /leaderboard/away', () => {

  describe('Quando quando é feita uma requisição para a rota', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(findAllTeamMock as Team[]);
    sinon
      .stub(Match, 'findAll')
      .resolves(findAllMatchAwayMock as Match[]);
    });
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    (Match.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/leaderboard/away');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(getAllAwayResponse)
    })
  })

  describe('Quando quando é feita uma requisição para a rota e acontece um erro', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .callsFake(() => {
        throw new Error('Erro interno sequelize')
      })
    })
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 500', async () => {
      const httpResponse: Response = await chai.request(app).get('/leaderboard/away');
      expect(httpResponse.status).to.equal(500);
      expect(httpResponse.body).to.deep.equal(errorResponse)
    })
})

})
