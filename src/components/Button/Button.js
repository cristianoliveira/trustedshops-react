import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button.
 */

const Button = ({ theme, size, rounded, icon, children, ghost, ...props }) => {
  const className = () => {
    let buttonClass = 'mrui-button';

    switch (theme) {
    case 'secondary': buttonClass += ' mrui-button--secondary'; break;
    case 'text': buttonClass += ' mrui-button--text'; break;
    case 'icon': buttonClass += ' mrui-button--icon'; break;
    default: buttonClass += ' mrui-button--primary'; break;
    }

    switch (size) {
    case 'small': buttonClass += ' mrui-button--small'; break;
    case 'large': buttonClass += ' mrui-button--large'; break;
    default: buttonClass += ' mrui-button--medium'; break;
    }

    switch (icon) {
    case 'left': buttonClass += ' mrui-button--icon-left'; break;
    case 'right': buttonClass += ' mrui-button--icon-right'; break;
    default: buttonClass += ''; break;
    }

    buttonClass += rounded ? ' mrui-button--rounded' : '';

    buttonClass += ghost ? ' mrui-button--ghost' : '';

    return buttonClass;
  };

  return <button {...props} className={className()}><span className="mrui-button__children">{children}</span></button>;
};

Button.propTypes = {
  /** This is the text for the button */
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'text', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.oneOf(['left', 'right', 'no-icon']),
  rounded: PropTypes.bool,
  ghost: PropTypes.bool
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
  icon: 'no-icon',
  rounded: false,
  ghost: false
};

export default Button;
