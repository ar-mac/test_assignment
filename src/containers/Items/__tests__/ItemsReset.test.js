import React from 'react';
import { shallow } from 'enzyme';

import { ItemsReset } from '../ItemsReset';

describe('ItemsReset', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({
      resetItems: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<ItemsReset {...props} />, { lifecycleExperimental: true });

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
