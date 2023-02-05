import React from 'react';
import { Flex, Image, Link, Text } from 'rebass';
import Content from '../Content';
import Header from '../Header';
import Seo from '../Seo';

const Product = ({ product }) => (
  <>
    <Seo
      product={{
        description: product.description,
        imagePath: product.image,
        name: product.title,
      }}
      title={product.title}
    />
    <Header hero={product.title} />
    <Content>
      <Text as="p" variant="intro">
        {product.description}{' '}
        <Link href="mailto:jesse@541.ski">Contact us</Link> for more info.
      </Text>
      <Flex justifyContent="center" pt={5}>
        <Image alt={product.title} src={product.image} />
      </Flex>
    </Content>
  </>
);

export default Product;
