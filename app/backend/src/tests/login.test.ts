import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { 
  findOneMock,
  incorrectPasswordLogin,
  incorrectEmailLogin,
  fieldIncorrectResponse,
  omitPasswordLogin,
  fieldMissingResponse,
  correctLogin,
  notFoundTokenResponse,
  invalidTokenResponse,
  incorrectToken,
  correctToken,
  roleResponse,
} from './mocks/login.mock'

describe('POST /login', () => {

  describe('Quando o campo password for informado incorretamente', () => {
    beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(findOneMock as User);
    });
    afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
    })
    it('deve retornar um 401', async () => {
      const httpResponse: Response = await chai.request(app).post('/login').send(incorrectPasswordLogin);
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal(fieldIncorrectResponse)
    })
  })

  describe('Quando o campo email for informado incorretamente', () => {
    beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(undefined);
    });
    afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
    })
    it('deve retornar um 401', async () => {
      const httpResponse: Response = await chai.request(app).post('/login').send(incorrectEmailLogin);
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal(fieldIncorrectResponse)
    })
  })

  describe('Quando algum campo for omitido', () => {
    it('deve retornar um 400', async () => {
      const httpResponse: Response = await chai.request(app).post('/login').send(omitPasswordLogin);
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal(fieldMissingResponse)
    })
  })

  describe('Quando a requisição é feita com sucesso', () => {
    beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(findOneMock as User);
    });
    afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
    })
    it('deve retornar um 200 e um token', async () => {
      const httpResponse: Response = await chai.request(app).post('/login').send(correctLogin);
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.have.property('token')
    })
  })

})

describe('GET /login/validate', () => {
  
  describe('Quando o token e passado corretamente', () => {

    it('deve retornar um 200', async () => {
      const httpResponse: Response = await chai.request(app).get('/login/validate').set(correctToken)
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(roleResponse)
    })
  })

  describe('Quando o token é omitido', () => {

    it('deve retornar um 401', async () => {
      const httpResponse: Response = await chai.request(app).get('/login/validate')
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal(notFoundTokenResponse)
    })
  })

  describe('Quando o token é invalido', () => {

    it('deve retornar um 400', async () => {
      const httpResponse: Response = await chai.request(app).get('/login/validate').set(incorrectToken)
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal(invalidTokenResponse)
    })
  })
})

