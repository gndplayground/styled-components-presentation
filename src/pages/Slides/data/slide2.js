export default {
  steps: [
    {
      key: 'slide2_renderText',
      data: {
        center: true,
        animation: 'opacity',
        type: 'text',
        data: 'Let create a <Button /> Component.',
      },
    },
    {
      key: 'slide2_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
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
        className
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
  className: PropTypes.string,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
};

export default Button;

    `,
      },
    },
  ],
};
