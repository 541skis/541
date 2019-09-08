const styles = {
  colors: {
    background: '#fbf9fa',
    black: '#000',
    primary: '#a80038',
    secondary: '#fd0054',
    text: '#2b2024',
    textSubtle: '#aba0a4',
    white: '#fff',
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Lora, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: { body: 400, bold: 700 },
  lineHeights: { body: 1.7, heading: 1.25 },
  radii: { circle: 99999, default: 5 },
  shadows: { card: 'rgba(14, 14, 33, 0.1) 0px 22px 44px 0px' },
  sizes: { avatar: 48 },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

const variants = {
  buttons: {
    primary: {
      '&:disabled': { cursor: 'default', opacity: 0.3 },
      bg: 'primary',
      borderRadius: 'default',
      color: 'background',
      cursor: 'pointer',
      fontSize: 2,
      fontWeight: 'bold',
      px: 4,
      py: 3,
    },
  },
  text: {
    heading: { fontWeight: 'bold', lineHeight: 'heading' },
    intro: {
      fontSize: [3, 4],
      lineHeight: 'body',
      textAlign: ['left', 'left', 'center'],
    },
    paragraph: {
      fontSize: [2, 3],
      lineHeight: 'body',
      maxWidth: 675,
      mx: 'auto',
      textAlign: ['left', null, 'justify'],
    },
  },
  variants: {
    card: {
      bg: 'black',
      borderRadius: 'default',
      boxShadow: 'card',
      color: 'white',
      display: 'block',
      overflow: 'hidden',
    },
    link: { color: 'primary', textDecoration: 'underline' },
    navLink: {
      '&>a': {
        '&.active': { opacity: 0.3 },
        fontSize: 1,
        letterSpacing: '0.075em',
        ml: 4,
        py: 3,
        textTransform: 'uppercase',
      },
      display: 'inline-block',
    },
  },
};

export default { ...styles, ...variants };