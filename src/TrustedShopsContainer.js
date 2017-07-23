import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TrustedShops from './TrustedShops';

const API_URL = 'https://api.trustedshops.com/rest/public/v2/shops/';

class TrustedShopContainer extends PureComponent {
  static propTypes = {
    shopId: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch(`${API_URL + this.props.shopId}/quality.json`)
      .then(resp => resp.json())
      .then(json => json.response.data)
      .then(data => this.setState({ data: data }));
  }

  render() {
    if (!this.state.data) {
      return null;
    }

    const { qualityIndicators: { reviewIndicator } } = this.state.data.shop;

    return (
      <TrustedShops
        {...this.props}
        overalRate={reviewIndicator.overallMark}
        overalDescription={reviewIndicator.overallMarkDescription}
      />
    );
  }
}

export default TrustedShopContainer;
