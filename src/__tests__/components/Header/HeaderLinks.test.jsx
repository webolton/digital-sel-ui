import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import HeaderLinks from 'components/Header/HeaderLinks';

const initialState = { authentication: '' };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<HeaderLinks />', () => {
  describe('render() when there is no currentUser', () => {
    test('renders the component', () => {
      const wrapper = shallow(<HeaderLinks store={store} />);
      const component = wrapper.dive();
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
