const { resolve } = require('path');
require('dotenv').config({ path: '.env' });

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      options: { component: resolve('src/components/Layout') },
      resolve: 'gatsby-plugin-layout',
    },
    {
      options: {
        display: 'swap',
        fonts: ['Lora:700', 'Open Sans:400,700'],
      },
      resolve: 'gatsby-plugin-google-fonts',
    },
    {
      options: { rule: { include: /images/ } },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        stores: {
          store: {
            domain: process.env.SHOPIFY_URL,
            storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
          },
        },
      },
      resolve: 'gatsby-plugin-shopify-buy',
    },
    {
      options: {
        background_color: '#fbf9fa',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
        name: '541 Skis',
        short_name: '541',
        start_url: '/',
        theme_color: '#a80038',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: { name: 'images', path: 'src/images' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        password: process.env.SHOPIFY_PASSWORD,
        storeUrl: process.env.SHOPIFY_URL,
      },
      resolve: 'gatsby-source-shopify',
    },
  ],
  siteMetadata: {
    banner: '/images/banner.png',
    datePublished: '2020-01-01',
    description:
      '541 skis are designed with a basic philosophy: ski all conditions and terrain with confidence and power. These are truly one-quiver skis.',
    facebook: '541skis',
    instagram: '541skis',
    language: 'en',
    local: 'en_US',
    logo: '/images/logo.png',
    siteName: '541 Skis',
    url: 'https://541.ski',
  },
};
