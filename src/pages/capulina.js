import React from 'react';
import Product from '../components/Product';

const AdoboPage = () => (
  <Product
    product={{
      description:
        'A “big mountain” ski built for the technical aspects and terrain of Alaska. Its double-rocker design makes the Capulina easy to maneuver while maintaining power throughout each turn.',
      image: '/images/capulina.png',
      title: 'Capulina',
    }}
  />
);

export default AdoboPage;
