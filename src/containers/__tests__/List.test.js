import React from 'react';
import { shallow } from 'enzyme';

import List from '../List';

describe('List', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({}, propOverrides);

    const wrapper = shallow(<List {...props} />);

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
