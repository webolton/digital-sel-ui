import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userActions } from 'actions/userActions';
import fetchMock from 'fetch-mock';

const API_URL = 'http://localhost:4000';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('userActions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('login', () => {
    const testEmail = 'test@catmail.com';
    const testPw = 'password1';
    test('Dispatches the correct action and payload', () => {
      fetchMock.postOnce(`${API_URL}/users/sign_in`, {
        body: { user: { email: testEmail, password: testPw } },
        headers: { 'content-type': 'application/json' },
      });
      const expectedActions = [
        {
          currentUser: {
            email: testEmail,
          },
          type: 'USER_LOGIN_REQUEST',
        },
      ];
      store.dispatch(userActions.login(testEmail, testPw));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
