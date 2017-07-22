import React from 'react';
import PropTypes from 'prop-types';

import './MylibTheme.css';

/**
 * This component should be at the top of the application. It injects all
 * correct styles for the common components.
 **/
const MylibTheme = ({ children }) => <div className="mrui">{ children }</div>;

MylibTheme.propTypes = {
  children: PropTypes.node.isRequired
};

export default MylibTheme;
