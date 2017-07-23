import React from 'react';
import PropTypes from 'prop-types';

import logo from './images/trusted-shops.png';
import StarRate from './components/StarRate';
import TextRate from './components/TextRate';
import './TrustedShops.css';

const MAX_RATE = 5;

function TrustedShops({ overalRate, overalDescription }) {
  return (
    <div className="trustedshops">
      <div className="trustedshops-badge">
        <img alt="Trusted" src={logo} />
      </div>
      <div className="trustedshops-review">
        <StarRate rate={overalRate} max={MAX_RATE} />
        <TextRate rate={overalRate} max={MAX_RATE} text={overalDescription} />
      </div>
    </div>
  );
}

TrustedShops.defaultProps = {
  overalRate: 0,
  overalDescription: '',
};

TrustedShops.propTypes = {
  overalRate: PropTypes.number.isRequired,
  overalDescription: PropTypes.string.isRequired,
};

export default TrustedShops;
