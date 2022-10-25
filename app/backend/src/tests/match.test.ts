import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/Match';
import IMatch from '../interfaces/IMatch';
import * as jwt from 'jsonwebtoken'

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { 
  findAllMock,
  findAllByQueryInProgressMock,
  insertMatchResponse,
  insertMatch,
  token,
  finishSuccessResponse,
  finishErrorResponse,
  updateMatchMock,
  insertMatchInvalid,
  insertEqualTeamsResponse,
  updateScoreMock,
  updateScore,
  scoreUpdateSuccessResponse,
  scoreUpdateErrorResponse,
} from './mocks/match.mock'

describe('GET /matches', () => {

  describe('Quando quando é feita uma requisição para a rota', () => {
    beforeEach(async () => {
    sinon
      .stub(Match, "findAll")
      .resolves(findAllMock as IMatch[]);
    });
    afterEach(()=>{
    (Match.findAll as sinon.SinonStub).restore();
    })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/matches');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findAllMock)
    })
  })

})

describe('GET /matches?inProgress', () => {
  
  describe('Quando é feita uma requisição para a rota true no query string', () => {
    beforeEach(async () => {
      sinon
        .stub(Match, "findAll")
        .resolves(findAllByQueryInProgressMock as IMatch[]);
      });
      afterEach(()=>{
      (Match.findAll as sinon.SinonStub).restore();
      })
    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/matches?inProgress=true');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(findAllByQueryInProgressMock)
    })
  })
})


describe('POST /matches', () => {
  
  describe('Quando cria uma nova partida com sucesso', () => {
    beforeEach(async () => {
      sinon
        .stub(Match, "create")
        .resolves(insertMatchResponse as Match); 
      sinon
        .stub(jwt, 'verify')
        .callsFake(() => {
          return {
            "id": 1,
            "username": "Admin",
            "role": "admin",
            "email": "admin@admin.com",
            "iat": 1666485018
          }
        })
      });
      afterEach(()=>{
      (Match.create as sinon.SinonStub).restore();
      (jwt.verify as sinon.SinonStub).restore();
      })
    it('deve retornar um 201', async () => {
      const httpResponse: Response = await chai.request(app).post('/matches').set(token).send(insertMatch);
      expect(httpResponse.status).to.equal(201);
      expect(httpResponse.body).to.deep.equal(insertMatchResponse)
    })
  })

  describe('Quando cria uma nova partida com times igual exemplo: Barcelona x Barcelona', () => {
    beforeEach(async () => {
      sinon
        .stub(jwt, 'verify')
        .callsFake(() => {
          return {
            "id": 1,
            "username": "Admin",
            "role": "admin",
            "email": "admin@admin.com",
            "iat": 1666485018
          }
        })
      });
      afterEach(()=>{
      (jwt.verify as sinon.SinonStub).restore();
      })
    it('deve retornar um 422', async () => {
      const httpResponse: Response = await chai.request(app).post('/matches').set(token).send(insertMatchInvalid);
      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.deep.equal(insertEqualTeamsResponse)
    })
  })
})

describe('PATCH /matches/:id/finish', () => {
  
  describe('Quando quando é feita uma requisição para a rota com um id válido', () => {
    beforeEach(async () => {
      sinon
        .stub(Match, "update")
        .resolves([1, [updateMatchMock as Match]]); 
      sinon
        .stub(jwt, 'verify')
        .callsFake(() => {
          return {
            "id": 1,
            "username": "Admin",
            "role": "admin",
            "email": "admin@admin.com",
            "iat": 1666485018
          }
        })
      });
      afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
      (jwt.verify as sinon.SinonStub).restore();
      })
    it('deve retornar um 200 e uma mensagem de partida finalizada', async () => {
      const httpResponse: Response = await chai.request(app).patch('/matches/1/finish').set(token);
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(finishSuccessResponse)
    })
  })

  describe('Quando quando é feita uma requisição para a rota com um id inválido', () => {
    beforeEach(async () => {
      sinon
        .stub(Match, "update")
        .resolves([0, [updateMatchMock as Match]]); 
      sinon
        .stub(jwt, 'verify')
        .callsFake(() => {
          return {
            "id": 1,
            "username": "Admin",
            "role": "admin",
            "email": "admin@admin.com",
            "iat": 1666485018
          }
        })
      });
      afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
      (jwt.verify as sinon.SinonStub).restore();
      })
    it('deve retornar um 409 e uma mensagem de erro', async () => {
      const httpResponse: Response = await chai.request(app).patch('/matches/199/finish').set(token);
      expect(httpResponse.status).to.equal(409);
      expect(httpResponse.body).to.deep.equal(finishErrorResponse)
    })
  })
})

describe('PATCH /matches/:id', () => {
  
  describe('Quando quando é feita uma requisição para a rota com id válido', () => {
    beforeEach(async () => {
      sinon
        .stub(Match, "update")
        .resolves([1, [updateScoreMock as Match]]); 
      sinon
        .stub(jwt, 'verify')
        .callsFake(() => {
          return {
            "id": 1,
            "username": "Admin",
            "role": "admin",
            "email": "admin@admin.com",
            "iat": 1666485018
          }
        })
      });
      afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
      (jwt.verify as sinon.SinonStub).restore();
      })
    it('deve retornar um 200 e uma mensagem de placar atualizado', async () => {
      const httpResponse: Response = await chai.request(app).patch('/matches/1').set(token).send(updateScore);
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(scoreUpdateSuccessResponse)
    })
  })

  describe('Quando quando é feita uma requisição para a rota com id inválido', () => {
    beforeEach(async () => {
      sinon
        .stub(Match, "update")
        .resolves([0, [updateScoreMock as Match]]); 
      sinon
        .stub(jwt, 'verify')
        .callsFake(() => {
          return {
            "id": 1,
            "username": "Admin",
            "role": "admin",
            "email": "admin@admin.com",
            "iat": 1666485018
          }
        })
      });
      afterEach(()=>{
      (Match.update as sinon.SinonStub).restore();
      (jwt.verify as sinon.SinonStub).restore();
      })
    it('deve retornar um 409 e uma mensagem de erro ao atualizar placar', async () => {
      const httpResponse: Response = await chai.request(app).patch('/matches/199').set(token).send(updateScore);
      expect(httpResponse.status).to.equal(409);
      expect(httpResponse.body).to.deep.equal(scoreUpdateErrorResponse)
    })
  })

})
