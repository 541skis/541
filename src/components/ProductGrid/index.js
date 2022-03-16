import React from 'react';
import { Box, Card, Flex, Heading } from 'rebass';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ProductGrid = () => (
  <Flex flexWrap="wrap" justifyContent="center" mb={-5} mx={-3}>
    {useStaticQuery(
      graphql`
        query {
          allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                id
                title
                handle
                createdAt
                images {
                  id
                  gatsbyImageData(layout: FULL_WIDTH)
                }
                variants {
                  price
                }
              }
            }
          }
        }
      `
    ).allShopifyProduct.edges.map(({ node: product }) => (
      <Box key={product.id} mb={5} px={3} width={[1, null, 1 / 3]}>
        <Card as={Link} to={`/${product.handle}/`} variant="card.light">
          <Heading as="h3" p={4} textAlign="center">
            {product.title}
          </Heading>
          <GatsbyImage
            alt={product.title}
            image={getImage(product.images[0])}
          />
        </Card>
      </Box>
    ))}
  </Flex>
);

export default ProductGrid;
