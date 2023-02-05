import React from 'react';
import { Box, Card, Flex, Heading, Image, Text } from 'rebass';
import Content from '../components/Content';
import Header from '../components/Header';
import Seo from '../components/Seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <>
    <Seo title="541 Skis — Shred both piste and powder" />
    <Header hero={<>One&nbsp;Mountain&mdash;One&nbsp;Ski</>} />
    <Content pb={5}>
      <Text as="p" variant="intro">
        541 skis are designed with a basic philosophy: ski all conditions and
        terrain with confidence and power. These are truly
        one&#8209;quiver&nbsp;skis.
      </Text>
    </Content>
    <Content pb={5}>
      <Flex flexWrap="wrap" justifyContent="center" mb={-5} mx={-3}>
        <Box mb={3} px={3}>
          <Card as={Link} to="/adobo" variant="card.light">
            <Heading as="h3" p={4} textAlign="center">
              Adobo
            </Heading>
            <Image alt="Adobo image" src="/images/adobo.png" />
          </Card>
        </Box>
        <Box mb={3} px={3}>
          <Card as={Link} to="/capulina" variant="card.light">
            <Heading as="h3" p={4} textAlign="center">
              Capulina
            </Heading>
            <Image alt="Capulina image" src="/images/capulina.png" />
          </Card>
        </Box>
      </Flex>
    </Content>
  </>
);

export default IndexPage;
