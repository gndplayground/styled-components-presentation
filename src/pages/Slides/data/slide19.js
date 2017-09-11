export default {
  steps: [
    {
      key: 'slide19_renderText',
      data: {
        center: true,
        animation: 'opacity',
        type: 'text',
        data: 'Let re create our <Button /> Component with CSS Modules',
      },
    },
    {
      key: 'slide19_renderCode',
      data: {
        animation: 'opacity',
        type: 'code',
        prismLang: 'jsx',
        data: `
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './button.css';

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
        styles.base,
        {
          [styles.primary]: primary,
          [styles.danger]: danger,
          [styles.warning]: warning,
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



    `,
      },
    },
  ],
};
