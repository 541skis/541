const styles = {
  colors: {
    background: '#f8f6f7',
    black: '#000',
    primary: '#a80038',
    text: '#2b2024',
    textSubtle: '#9b9094',
    white: '#fff',
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Lora, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: { body: 400, bold: 700 },
  lineHeights: { body: 1.6, heading: 1.25 },
  radii: { circle: 99999, default: 5 },
  shadows: { card: 'rgba(14, 14, 33, 0.05) 0px 22px 44px 0px' },
  sizes: { avatar: 48 },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

const variants = {
  buttons: {
    primary: {
      '&:disabled': { cursor: 'default', opacity: 0.3 },
      '&:hover': { bg: 'primary' },
      bg: 'primary',
      borderRadius: 'default',
      color: 'background',
      cursor: 'pointer',
      fontSize: 2,
      fontWeight: 'bold',
      px: 4,
      py: 3,
      transition: 'background-color 0.2s',
    },
    simple: {
      '&:hover': { color: 'primary' },
      bg: 'inherit',
      color: 'inherit',
      cursor: 'pointer',
      transition: 'color 0.2s',
    },
  },
  text: {
    heading: { fontWeight: 'bold', lineHeight: 'heading' },
    intro: {
      fontSize: [2, 4],
      lineHeight: 'body',
      textAlign: 'center',
    },
    paragraph: {
      fontSize: [2, 3],
      lineHeight: 'body',
    },
  },
  variants: {
    card: {
      dark: {
        variant: 'variants.card.light',
        bg: 'black',
        color: 'white',
      },
      light: {
        bg: 'white',
        borderRadius: 'default',
        boxShadow: 'card',
        display: 'block',
        overflow: 'hidden',
      },
    },
    link: {
      '&:hover': { color: 'primary' },
      color: 'primary',
      textDecoration: 'underline',
      transition: 'color 0.2s',
    },
    navLink: {
      '&>a': {
        '&.active': {
          '&:hover': { color: 'inherit' },
          opacity: 0.3,
        },
        '&:hover': { color: 'primary' },
        fontWeight: 'bold',
        ml: 4,
        py: 3,
      },
      display: 'inline-block',
    },
  },
};

const theme = { ...styles, ...variants };

export default theme;
