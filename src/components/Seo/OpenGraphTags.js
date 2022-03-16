import React from 'react';
import { Helmet } from 'react-helmet';

const OpenGraphTags = ({
  description,
  image,
  locale,
  name,
  title,
  type,
  url,
}) => (
  <Helmet>
    <meta content="1200" property="og:image:width" />
    <meta content="628" property="og:image:height" />
    <meta content={description} property="og:description" />
    <meta content={description} property="og:image:alt" />
    <meta content={image} property="og:image" />
    <meta content={locale} property="og:locale" />
    <meta content={title} property="og:title" />
    <meta content={type} property="og:type" />
    <meta content={url} property="og:url" />
    {name && <meta content={name} property="og:site_name" />}
  </Helmet>
);

OpenGraphTags.defaultProps = {
  name: null,
  type: 'website',
};

export default OpenGraphTags;
