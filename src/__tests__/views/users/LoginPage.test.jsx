import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import LoginPage from 'views/users/LoginPage';

const initialState = { authentication: '' };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<LoginPage />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<LoginPage store={store} />);
      const component = wrapper.dive();
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
