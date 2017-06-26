import React from 'react';
import { shallow } from 'enzyme';

import { ItemsForm} from '../ItemsForm';

describe('ItemsForm', () => {
  const setup = (propOverrides) => {
    const props = Object.assign({
      handleSubmit: jest.fn().mockReturnValue(jest.fn()),
      onSubmit: jest.fn(),
      reset: jest.fn(),
    }, propOverrides);

    const wrapper = shallow(<ItemsForm {...props} />);

    return {
      props,
      wrapper,
      getForm: wrapper.find('form'),
    };
  };

  test('render', () => {
    expect(setup().wrapper).toMatchSnapshot();
  });

  describe('form submitting', () => {
    test('resets form', () => {
      const { getForm, props } = setup();
      const event = {preventDefault: jest.fn()};
      getForm.simulate('submit', event);
      expect(props.reset.mock.calls.length).toBe(1);
    });

    test('submits form data', () => {
      const handleSubmitSubFunction = jest.fn();
      const event = {preventDefault: jest.fn()};
      const { getForm, props } = setup({
        handleSubmit: jest.fn().mockReturnValue(handleSubmitSubFunction)
      });
      getForm.simulate('submit', event);

      expect(props.handleSubmit.mock.calls.length).toBe(1);
      expect(props.handleSubmit.mock.calls[0][0]).toBe(props.onSubmit);
      expect(handleSubmitSubFunction.mock.calls.length).toBe(1)
    });
  });
});
