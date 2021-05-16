module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx}', './components/**/*.{js,ts,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      text: '#343D48', // body color and primary color
      textSecondary: '#02073E', // secondary body color
      heading: '#0F2137', // primary heading color
      headingSecondary: '#343D48', // heading color
      background: '#FFFFFF', // body background color
      backgroundSecondary: '#F9FBFD', // secondary background color
      borderColor: '#DCE5EA', // border color
      primary: '#A29BFE', // primary button and link color
      secondary: '#DB4A87', // secondary color - can be used for hover states
      muted: '#7B8188', // muted color
      accent: '#609', // a contrast color for emphasizing UI
      dark: '#10132D',
      link: '#4F96FF', // default link color
      black: '#000000',
      success: {
        light: 'rgba(126, 213, 111, 1)',
        dark: 'rgba(40, 180, 131, 1)',
      },
      footer: {
        light: '#353448',
        dark: '#2B293E',
      },

      // highlight	a background color for highlighting text
      modes: {
        dark: {
          text: '#fff',
          background: '#000',
          primary: '#0cf',
          secondary: '#09c',
          muted: '#111',
        },
      },
    },
    fontFamily: {
      body: ['DM Sans', 'sans-serif'],
      // body:
      //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: ['DM Sans', 'sans-serif'],
      monospace: ['Menlo', 'monospace'],
    },
    fontSize: {
      12: '12px', // 0
      14: '14px', // 1
      16: '16px', // 2
      18: '18px', // 3
      20: '20px', // 4
      22: '22px', // 5
      24: '24px', // 6
      26: '26px', // 7
      28: '28px', // 8
      30: '30px', // 9
      32: '32px', // 10
      36: '36px', // 11
      40: '40px', // 12
      42: '42px', // 13
      48: '48px', // 14
      52: '52px', // 15
      64: '64px', // 16
    },
    fontWeights: {
      body: 'normal',
      // body: 400,
      heading: 500,
      // heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      // body: 1.5,
      heading: 1.25,
      // heading: 1.125,
    },
    letterSpacings: {
      body: 'normal',
      caps: '0.2em',
      heading: '-0.5px',
    },
    spacing: {
      0: '0px', // 0
      5: '5px', // 1
      10: '10px', // 2
      16: '16px', // 3
      20: '20px', // 4
      24: '24px', // 5
      30: '30px', // 6
      32: '32px', // 7
      40: '40px', // 8
      45: '45px', // 9
      50: '50px', // 10
      55: '55px', // 11
      60: '60px', // 12
      65: '65px', // 13
      70: '70px', // 14
      80: '80px', // 15
      90: '90px', // 16
      100: '100px', // 17
      110: '110px', // 18
      120: '120px', // 19
      130: '130px', // 20
      140: '140px', // 21
      150: '150px', // 22
      160: '160px', // 23
    },
    boxShadow: {
      normal: '0 6px 13px 0 rgba(38,78,118,0.1)',
      card: ' 0 3px 20px 0 rgba(0, 0, 0, 0.12)',
      container: '0px 0px 25px rgba(54,91,125,0.04)',
    },

    breakpoints: [
      '480px',
      '640px',
      '768px',
      '1024px',
      '1260px',
      '1367px',
      '1440px',
      '1600px',
    ],
    // variants can use custom, user-defined names
    layout: {
      container: {
        maxWidth: ['100%', null, null, '720px', '970px', '1140px', '1260px', '1366px'],
        paddingLeft: [6],
        paddingRight: [6],
        m: '0 auto',
      },
      main: {
        background: `linear-gradient(180deg,#F9FAFC 0%,rgba(249,250,252,0) 100%)`,
      },
    },
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
      },
    },
    links: {},
    images: {
      avatar: {
        width: 48,
        height: 48,
        borderRadius: 99999,
      },
    },
    // variants for buttons
    buttons: {
      default: {
        backgroundColor: 'transparent',
        fontFamily: 'body',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.3s ease-in-out 0s',
        whiteSpace: 'nowrap',
      },
      primary: {
        variant: 'buttons.default',
        color: 'white',
        bg: 'primary',
        minHeight: '60px',
        padding: '0 30px',
        '&:hover': {
          bg: 'dark',
        },
      },
      primaryMd: {
        variant: 'buttons.primary',
        minHeight: '50px',
        px: '25px',
      },
      secondary: {
        variant: 'buttons.primary',
        color: 'white',
        bg: 'secondary',
      },
      muted: {
        variant: 'buttons.default',
        backgroundColor: '#EDF0F2',
        color: 'text',
        ':hover': {
          backgroundColor: 'primary',
          color: '#fff',
        },
      },
      white: {
        variant: 'buttons.default',
        backgroundColor: 'white',
        color: '#020718',
      },
      text: {
        variant: 'buttons.default',
        color: 'text',
      },
    },
    cards: {
      primary: {
        padding: 2,
        borderRadius: 4,
        // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
      },
      offer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
        minHeight: 130,
        m: 2,
        background: '#FFFFFF',
        border: '1px solid #EDEFF6',
        borderRadius: 5,
      },
      featureCard: {
        display: 'flex',
        alignItems: ['center', 'flex-start'],
        flexDirection: ['column', 'row'],
        p: [0, 3],
      },
    },
    forms: {
      label: {
        fontSize: 1,
        fontWeight: 'bold',
      },
      input: {
        borderRadius: 8,
        borderColor: 'borderColor',
        fontFamily: 'body',
        px: 5,
        py: 0,
        minHeight: 60,
        '&:focus': {
          borderColor: 'primary',
          //boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
          outline: 'none',
        },
      },
    },

    badges: {
      primary: {
        color: 'background',
        bg: '#28A5FF',
        borderRadius: 30,
        p: '3px 11px',
        fontSize: 1,
        letterSpacing: '-0.5px',
      },
      outline: {
        color: 'primary',
        bg: 'transparent',
        boxShadow: 'inset 0 0 0 1px',
      },
    },

    styles: {
      // To add base, top-level styles to the <body> element, use theme.styles.root.
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      // h1-h6 Heading styles
      h1: {
        // fontFamily: 'none',
        // variant: 'text.heading',
        // fontSize: 6,
      },
      h2: {
        // fontFamily: 'none',
        // variant: 'text.heading',
        // fontSize: 5,
      },
      h3: {
        variant: 'text.heading',
        fontSize: 4,
      },
      h4: {
        variant: 'text.heading',
        fontSize: 3,
      },
      h5: {
        variant: 'text.heading',
        fontSize: 2,
      },
      h6: {
        variant: 'text.heading',
        fontSize: 1,
      },
      // Divider styles
      hr: {
        border: 0,
        borderBottom: '1px solid',
        borderColor: '#D9E0E7',
      },
      // also you can use other HTML elements style here
      ul: {
        listStyle: 'none',
      },
      srOnly: {
        border: '0 !important',
        clip: 'rect(1px, 1px, 1px, 1px) !important',
        clipPath: 'inset(50%) !important',
        height: '1px !important',
        margin: '-1px !important',
        overflow: 'hidden !important',
        padding: '0 !important',
        position: 'absolute !important',
        width: '1px !important',
        whiteSpace: 'nowrap !important',
      },
    },
    extend: {
      width: {
        80: '80px',
        100: '100px',
        150: '150px',
        160: '160px',
        164: '164px',
        190: '190px',
        232: '232px',
        296: '296px',
      },
      minWidth: {
        32: '32px',
        64: '64px',
        80: '80px',
        100: '100px',
        150: '150px',
        160: '160px',
        296: '296px',
      },
      maxWidth: {
        32: '32px',
        40: '40px',
        50: '50px',
        60: '60px',
        64: '64px',
        100: '100px',
        136: '136px',
        164: '164px',
        168: '168px',
        172: '172px',
        192: '192px',
        225: '225px',
        232: '232px',
        240: '240px',
        350: '350px',
        375: '375px',
        600: '600px',
        750: '750px',
        1144: '1144px',
      },
      minHeight: {
        245: '245px',
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus', 'group-hover'],
      opacity: ['hover'],
    },
  },
  plugins: [],
};
