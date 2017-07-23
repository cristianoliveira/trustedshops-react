import React from 'react';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils';
import TrustedShops from './TrustedShops';

describe("TrustedShops", () => {
  it("places the same amount of stars as max rate", () => {
    const component = mount(
      <TrustedShops overalRate={3} overalDescription="EXCELENT" />
    );
    expect(component.text()).toContain('3.00 / 5.00');
    expect(component.text()).toContain('EXCELENT');
  });
});
