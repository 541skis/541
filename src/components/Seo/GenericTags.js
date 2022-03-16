import React from 'react';
import { Helmet } from 'react-helmet';

const GenericTags = ({ author, description, language, title, url }) => (
  <Helmet>
    <html lang={language} />
    <title>{title}</title>
    <link href={url} rel="canonical" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content={description} name="description" />
    <meta content={author} name="author" />
  </Helmet>
);

export default GenericTags;
