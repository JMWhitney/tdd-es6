import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';
import { app } from './server';

describe('GET /users/:username', () => {
  const fakeData = {
    id: '123',
    username: 'abc',
    email: 'abc@email.com',
  };

  it('sends the correct response when a user with the username is found', async () => {

    // Sinon overrides the call to 'getUserByUsername' and instead makes it return a value that we define.
    // This way we can avoid actual calls to a database
    const stub = sinon
      .stub(db, 'getUserByUsername')
      .resolves(fakeData);

    // test how our server (app) behaves when it receives a GET request to the /users/${username} url using supertest
    await request(app).get('/users/abc')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(fakeData);

    // On the first call of our stub we expect the first argument that gets passed to equal 'abc'
    expect(stub.getCall(0).args[0]).to.equal('abc');

    // We need to restore the function that we overriden with sinon
    stub.restore();
  });

  it('sends the correct response when there is an error', async () => {
    const fakeError = { message: 'Something went wrong!' };

    const stub = sinon.stub(db, 'getUserByUsername')
      .throws(fakeError);

    await request(app).get('/users/abc')
      .expect(500)
      .expect('Content-Type', /json/)
      .expect(fakeError);

    stub.restore();
  });

  it('returns the appropriate response when the user is not found', async () => {

    // Simulate user not found
    const stub = sinon.stub(db, 'getUserByUsername')
      .resolves(null);

    await request(app).get('/users/abc')
      .expect(404)

    stub.restore();
  });

});