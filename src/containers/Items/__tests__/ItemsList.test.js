import React from 'react';
import { shallow } from 'enzyme';

import { ItemsList } from '../ItemsList';

describe('ItemsList', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({}, propOverrides);

    const wrapper = shallow(<ItemsList {...props} />);

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
