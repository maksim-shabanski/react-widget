import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

const Button = ({ children, className, type, variant, onClick }) => {
  const prefix = 'btn';
  const classes = classNames(
    className,
    prefix,
    variant && `${prefix}--${variant}`
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  className: '',
  variant: '',
  type: 'button',
  onClick: () => { }, // eslint-disable-line
};

export default Button;
