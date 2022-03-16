import React from 'react';
import { Helmet } from 'react-helmet';

const TwitterTags = ({ description, image, title, type }) => (
  <Helmet>
    <meta content={description} name="twitter:description" />
    <meta content={description} name="twitter:image:alt" />
    <meta content={image} name="twitter:image" />
    <meta content={title} name="twitter:title" />
    <meta content={type} name="twitter:card" />
  </Helmet>
);

TwitterTags.defaultProps = {
  type: 'summary_large_image',
  username: null,
};

export default TwitterTags;
