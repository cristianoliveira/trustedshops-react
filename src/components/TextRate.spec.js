import React from 'react';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import TextRate from './TextRate';

describe("TextRate", () => {
  it("places the text", () => {
    const starRate = mount(<TextRate rate={3} max={4} text="foo" />);
    expect(starRate.text()).toContain('foo');
  });

  it("places the rate and max together", () => {
    const starRate = mount(<TextRate rate={3} max={4} text="foo" />);
    expect(starRate.text()).toContain('3.00 / 4.00');
  });
});
