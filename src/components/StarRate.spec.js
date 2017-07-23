import React from 'react';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import StarRate from './StarRate';

describe("StarRate", () => {
  it("places the same amount of stars as max rate", () => {
    const starRate = mount(<StarRate rate={3} max={4} />);

    const container = starRate.find('.trustedshops-star-rate__placeholder');

    expect(container.children()).toHaveLength(4);
  });

  it("places the gold stars with the proporcional width", () => {
    const starRate = mount(<StarRate rate={2} max={4} />);

    const container = starRate.find('.trustedshops-star-rate__filled');

    expect(container.prop('style')).toEqual({ width: '50%' });
  });
});
