import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

Button.defaultProps = {
  href: '/',
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;