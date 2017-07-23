import React from 'react';
import PropTypes from 'prop-types';

import './TextRate.css';

function TextRate({ rate, max, text }) {
  return (
    <div className="trustedshops-text-rate">
      <span>{ text }</span><br />
      <span>{ `${rate.toFixed(2)} / ${max.toFixed(2)}` }</span>
    </div>
  );
}

TextRate.defaultProps = {
  range: 0,
  max: 5,
  text: ''
};

TextRate.propTypes = {
  rate: PropTypes.number.isRequired,
  max: PropTypes.number,
  text: PropTypes.string,
};

export default TextRate;
