import React from 'react';
import Product from '../components/Product';

const AdoboPage = () => (
  <Product
    product={{
      description:
        'A race-oriented all-mountain ski. Born on the varied terrain of Mt. Hood, the Adobo is built for all aspects of resort skiing.',
      image: '/images/adobo.png',
      title: 'Adobo',
    }}
  />
);

export default AdoboPage;
