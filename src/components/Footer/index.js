import React from 'react';
import { Box, Flex, Link } from 'rebass';
import { Facebook, Instagram, Mail } from 'react-feather';
import Content from '../Content';

const FooterItemLink = ({ icon, text, to }) => (
  <Box as="li" mb={[4, null, 0]} mr={[null, null, 0]} mx={[null, null, 3]}>
    <Link
      href={to}
      sx={{
        alignItems: 'center',
        color: 'text',
        display: 'flex',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      {icon} <Box ml={2}>{text}</Box>
    </Link>
  </Box>
);

const Footer = () => (
  <Content py={5}>
    <Flex
      alignItems="center"
      as="ul"
      flexDirection={['column', null, 'row']}
      justifyContent="center"
    >
      <FooterItemLink
        icon={<Instagram />}
        text="Instagram"
        to="https://www.instagram.com/541skis/"
      />
      <FooterItemLink
        icon={<Facebook />}
        text="Facebook"
        to="https://www.facebook.com/541skis/"
      />
      <FooterItemLink icon={<Mail />} text="Email" to="mailto:jesse@541.ski" />
    </Flex>
    <Box color="textSubtle" fontSize={1} mt={4} textAlign="center">
      &copy; 541 Sport LLC
    </Box>
  </Content>
);

export default Footer;
