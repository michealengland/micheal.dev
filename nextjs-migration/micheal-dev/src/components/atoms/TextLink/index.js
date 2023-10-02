import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function TextLink({children, to, activeClassName, partiallyActive, ...other}) {
  const internal = !! to

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <Link
        // TODO FIX props on this.
        // activeClassName={activeClassName}
        // partiallyActive={partiallyActive}
        href={to}
        {...other}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  }
}

TextLink.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  partiallyActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
}
