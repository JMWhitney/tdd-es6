
import { expect } from 'chai';
import { getUserByUsername } from './db';
import { getDatabaseData, setDatabaseData, resetDatabase } from './test-helpers';

describe('getUserByUsername', () => {

  const fakeData = [{
    id: '123',
    username: 'abc',
    email: 'abc@email.com',
  }, {
    id: '124',
    username: 'wrong',
    email: 'wrong@email.com',
  }]

  // Hooks to call certain functions at certain times, provided by mocha.
  beforeEach('init the database', async () => {
    await setDatabaseData('users', fakeData);
  });

  afterEach('reset the database', async () => {
    await resetDatabase();
  });

  it('get the correct user from the database given a username', async () => {

    const actual = await getUserByUsername('abc');
    // the expected result from getUserByUsername call
    const expected = fakeData[0];
    const finalDBState = await getDatabaseData('users');


    // Assert that the actual value deep equals the expected value
    expect(actual).excludingEvery('_id').to.deep.equal(expected);

    // Assert that the db was not altered in anyway
    expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);

  }); 

  it('returns null when the user is not found', async () => {
    const actual = await getUserByUsername('This_User_Does_Not_Exist');
    const finalDBState = await getDatabaseData('users')
    expect(actual).to.be.null;
    expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
  });
})