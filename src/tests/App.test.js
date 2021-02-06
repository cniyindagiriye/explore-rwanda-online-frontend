import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <App />', () => {
  it('should render div element', () => {
    expect(shallow(<App />).contains('div'));
  });
});
