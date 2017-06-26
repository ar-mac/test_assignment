import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../App';

describe('App', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({}, propOverrides);

    const wrapper = shallow(<App {...props} />, { lifecycleExperimental: true });

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
