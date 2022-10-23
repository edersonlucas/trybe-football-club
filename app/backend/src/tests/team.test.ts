import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { 
  findAllMock,
  findByPkMock,
} from './mocks/team.mock'

describe('GET /teams', () => {

  describe('Quando quando é feita uma requisição para a rota', () => {
    beforeEach(async () => {
    sinon
      .stub(Team, "findAll")
      .resolves(findAllMock as Team[]);
    });
    afterEach(()=>{
    (Team.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/teams');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findAllMock)
    })
  })

})

describe('GET /teams/:id', () => {
  
  describe('Quando quando é feita uma requisição para a rota passando um id', () => {
    beforeEach(async () => {
      sinon
        .stub(Team, "findByPk")
        .resolves(findByPkMock as Team);
      });
      afterEach(()=>{
      (Team.findByPk as sinon.SinonStub).restore();
      })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/teams/5');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findByPkMock)
    })
  })
})

