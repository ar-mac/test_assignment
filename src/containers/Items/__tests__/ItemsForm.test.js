import React from 'react';
import { shallow } from 'enzyme';

import { ItemsForm} from '../ItemsForm';

describe('ItemsForm', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({
      handleSubmit: jest.fn(),
      onSubmit: jest.fn(),
      reset: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<ItemsForm {...props} />);

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });
});
