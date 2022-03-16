import React from 'react';
import { Box } from 'rebass';
import { Link } from 'gatsby';

const NavLink = ({ children, to }) => (
  <Box variant="navLink">
    <Link activeClassName="active" to={to}>
      {children}
    </Link>
  </Box>
);

export default NavLink;
