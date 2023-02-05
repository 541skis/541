import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Footer from '../Footer';
import theme from '../../utilities/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${emotionReset}

        html {
          color: ${theme.colors.text};
          font-family: ${theme.fonts.body};
          font-weight: ${theme.fontWeights.body};
          line-height: ${theme.lineHeights.body};
          fill: currentColor;
        }

        body {
          background-color: ${theme.colors.background};
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}
    />
    {children}
    <Footer />
  </ThemeProvider>
);

export default Layout;
