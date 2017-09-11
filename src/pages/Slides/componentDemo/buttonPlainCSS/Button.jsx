import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './button.css';

const Button = (
  { primary,
    danger,
    warning,
    className,
...props
}) => (
  <button
    className={
      classNames(
        className,
        'bt',
        {
          'bt-primary': primary,
          'bt-danger': danger,
          'bt-warning': warning,
        },
      )
    }
    {...props}
  />
);

Button.propTypes = {
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;

