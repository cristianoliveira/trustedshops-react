import React from 'react';
import PropTypes from 'prop-types';

import StarSvg from './StarIcon';
import './StarRate.css';

function StarRate({ rate, max }) {
  const times = [...Array(max).keys()];
  const percentage = (rate / max) * 100;

  const styles = {
    width: `${percentage}%`,
  };

  return (
    <div className="trustedshops-star-rate">
      <div className="trustedshops-star-rate__placeholder">
        { times.map(index => <StarSvg key={index} />) }
      </div>
      <div className="trustedshops-star-rate__filled" style={styles}>
        { times.map(index => <StarSvg key={index} />) }
      </div>
    </div>
  );
}

StarRate.defaultProps = {
  range: 0,
  max: 5,
};

StarRate.propTypes = {
  rate: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default StarRate;
