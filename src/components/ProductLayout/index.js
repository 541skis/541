import React, { useContext, useState } from 'react';
import { Box, Button, Card, Flex, Text } from 'rebass';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import AppContext from '../../context/AppContext';
import Content from '../Content';
import Header from '../Header';
import Seo from '../Seo';
import VariantSelector from './VariantSelector';

const ProductLayout = ({ data: { shopifyProduct: product } }) => {
  const { addItemToCart } = useContext(AppContext);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [variant, setVariant] = useState(product.variants[0]);

  return (
    <>
      <Seo
        product={{
          available: variant.availableForSale,
          description: product.description,
          imagePath: variant.image.gatsbyImageData,
          name: product.title,
          price: variant.price,
          sku: variant.sku,
        }}
        title={product.title}
      />
      <Header hero={product.title} />
      <Content>
        <Text as="p" pb={5} variant="intro">
          {product.description}
        </Text>
        <Flex
          flexDirection={['column', null, 'row']}
          justifyContent="space-between"
          mb={5}
        >
          {product.options.map((option) => (
            <VariantSelector
              key={option.id.toString()}
              onChange={({ target }) =>
                setVariant(
                  product.variants.find((v) => v.title === target.value)
                )
              }
              option={option}
            />
          ))}
          <Flex alignItems="center" justifyContent="flex-end" mt={[3, null, 1]}>
            <Text fontWeight="bold" mr={3}>
              ${variant.price}
            </Text>
            {variant.availableForSale ? (
              <Button
                disabled={adding}
                onClick={async () => {
                  setAdding(true);
                  await addItemToCart(variant.shopifyId);
                  setAdding(false);
                  setAdded(true);
                }}
                type="button"
              >
                {adding ? 'Adding...' : 'Add to Cart'}
              </Button>
            ) : (
              <p>Currently out of stock.</p>
            )}
            {added && (
              <Box as={Link} ml={3} to="/cart" variant="link">
                View Cart
              </Box>
            )}
          </Flex>
        </Flex>
        {variant.image ? (
          <Card variant="card.dark">
            <GatsbyImage alt={product.title} image={getImage(variant.image)} />
          </Card>
        ) : (
          product.images.map((image) => (
            <Card key={image.id} variant="card.dark">
              <GatsbyImage alt={product.title} image={getImage(image)} />
            </Card>
          ))
        )}
      </Content>
    </>
  );
};

export const query = graphql`
  query ($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      description
      handle
      id
      images {
        id
        gatsbyImageData(layout: FULL_WIDTH)
      }
      options {
        id
        name
        values
      }
      productType
      shopifyId
      title
      variants {
        availableForSale
        id
        image {
          id
          gatsbyImageData(layout: FULL_WIDTH)
        }
        price
        selectedOptions {
          name
          value
        }
        shopifyId
        sku
        title
      }
    }
  }
`;

export default ProductLayout;
