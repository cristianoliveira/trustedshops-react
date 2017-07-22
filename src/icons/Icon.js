import React from 'react';
import PropType from 'prop-types';

import './Icon.css';

require('./svg/loader.js');

/**
 * The svg icon. Using this component you have access to all available icons
 * or create your custom icon.
 **/
function Icon({ name, className, children, ...props }) {
  const content = children || <use xlinkHref={`#${name}`} />;

  return (
    <div {...props} className={`mrui-icon ${className}`}>
      <svg>
        { content }
      </svg>
    </div>
  );
}

Icon.defaultProps = {
  className: '',
  children: null
};

Icon.propTypes = {
  /** To use a default icon pass the name of the icon.
   * The name availables are in `src/icons/svg`
   */
  name: PropType.string.isRequired,

  className: PropType.string,

  /** For custom svg you can send the svg content as a child. */
  children: PropType.node
};

export default Icon;
