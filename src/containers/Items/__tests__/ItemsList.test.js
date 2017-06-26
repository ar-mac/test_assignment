import React from 'react';
import { shallow } from 'enzyme';

import { ItemsList } from '../ItemsList';

describe('ItemsList', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({
      items: [],
    }, propOverrides);

    const wrapper = shallow(<ItemsList {...props} />);

    return {
      props,
      wrapper,
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });

  test('renders items', () => {
    const items = [
      {id: '1234', content: 'firstItem', count: 0},
      {id: '2345', content: 'secondItem', count: 1},
    ];

    const { wrapper } = setup({items});

    expect(wrapper.text()).toContain('firstItem - 0');
    expect(wrapper.text()).toContain('secondItem - 1');
  })
});
