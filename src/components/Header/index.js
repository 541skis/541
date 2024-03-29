import React from 'react';
import { Box, Flex, Heading, Link } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';
import Content from '../Content';
import Logo from '../../images/logo.svg';
import NavLink from '../NavLink';

const Header = ({ hero, ...props }) => (
  <Content {...props}>
    <Flex alignItems="center" as="nav" justifyContent="space-between" pt={3}>
      <Link as={GatsbyLink} to="/">
        <h1>
          <Logo alt="541 Skis" height={64} width={64} />
        </h1>
      </Link>
      <Box>
        <NavLink to="/story/">Our Story</NavLink>
      </Box>
    </Flex>
    {hero && (
      <Heading fontSize={[5, 6]} pb={3} pt={4} textAlign="center">
        {hero}
      </Heading>
    )}
  </Content>
);

Header.defaultProps = {
  hero: null,
};

export default Header;
