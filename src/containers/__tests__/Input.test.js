import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({}, propOverrides);

    const wrapper = shallow(<Input {...props} />);

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
