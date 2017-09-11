webpackJsonp([62],{621:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={steps:[{key:"slide19_renderText",data:{center:!0,animation:"opacity",type:"text",data:"Let re create our <Button /> Component with CSS Modules"}},{key:"slide19_renderCode",data:{animation:"opacity",type:"code",prismLang:"jsx",data:"\nimport React from 'react';\nimport classNames from 'classnames';\nimport PropTypes from 'prop-types';\n\nimport styles from './button.css';\n\nconst Button = (\n  { primary,\n    danger,\n    warning,\n    className,\n    ...props\n  }) => (\n    <button\n      className={\n      classNames(\n        className,\n        styles.base,\n        {\n          [styles.primary]: primary,\n          [styles.danger]: danger,\n          [styles.warning]: warning,\n        },\n      )\n    }\n      {...props}\n    />\n);\n\nButton.propTypes = {\n  primary: PropTypes.bool,\n  danger: PropTypes.bool,\n  warning: PropTypes.bool,\n  className: PropTypes.string,\n};\n\nexport default Button;\n\n\n\n    "}}]}}});
//# sourceMappingURL=62.bundle-c582a9092361f168de6a.js.map