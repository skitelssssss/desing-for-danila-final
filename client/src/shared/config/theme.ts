import { createTheme } from "@mui/material/styles";

// BR Design tokens
const BR_COLORS = {
  charcoal: "#1C1B18",
  warmWhite: "#F8F7F4",
  lightGrey: "#F0EEE9",
  midGrey: "#9A9690",
  divider: "#D8D5CF",
  indigo: "#0F1B3D",
  indigoLight: "#1B2D5E",
  white: "#FFFFFF",
} as const;

const theme = createTheme({
  palette: {
    primary: {
      main: BR_COLORS.charcoal,
      contrastText: BR_COLORS.warmWhite,
    },
    secondary: {
      main: BR_COLORS.lightGrey,
      contrastText: BR_COLORS.charcoal,
    },
    background: {
      default: BR_COLORS.warmWhite,
      paper: BR_COLORS.white,
    },
    text: {
      primary: BR_COLORS.charcoal,
      secondary: BR_COLORS.midGrey,
    },
    divider: BR_COLORS.divider,
    error: {
      main: "#B91C1C",
    },
  },

  typography: {
    fontFamily: "'Nunito', sans-serif",
    fontWeightRegular: 400,
    fontSize: 16,
    htmlFontSize: 16,

    h1: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 300,
      fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: BR_COLORS.charcoal,
    },
    h2: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 300,
      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: BR_COLORS.charcoal,
    },
    h3: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 400,
      fontSize: "1.0625rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: BR_COLORS.charcoal,
    },
    h4: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 400,
      fontSize: "0.8125rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: BR_COLORS.charcoal,
    },
    body1: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.9,
      color: "#6B6860",
    },
    body2: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 400,
      fontSize: "0.9375rem",
      lineHeight: 1.9,
      color: "#6B6860",
    },
    caption: {
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: BR_COLORS.midGrey,
    },
  },

  shape: {
    borderRadius: 0,
  },

  spacing: 4,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 400,
          WebkitFontSmoothing: "antialiased",
          backgroundColor: BR_COLORS.warmWhite,
          color: BR_COLORS.charcoal,
        },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@media (min-width: 640px)": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@media (min-width: 1024px)": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            maxWidth: "1400px",
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 400,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          borderRadius: 0,
          border: `1px solid ${BR_COLORS.charcoal}`,
          padding: "0.875rem 2rem",
          fontSize: "0.8125rem",
          lineHeight: 1,
          transition: "background 0.2s ease, color 0.2s ease",
          "&:hover": {
            background: BR_COLORS.charcoal,
            color: BR_COLORS.warmWhite,
            borderColor: BR_COLORS.charcoal,
          },
        },
        outlined: {
          background: "transparent",
          color: BR_COLORS.charcoal,
          borderColor: BR_COLORS.charcoal,
          "&:hover": {
            background: BR_COLORS.charcoal,
            color: BR_COLORS.warmWhite,
            borderColor: BR_COLORS.charcoal,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: BR_COLORS.white,
          borderRadius: 0,
          boxShadow: "none",
          transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          },
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          background: BR_COLORS.white,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: BR_COLORS.white,
          color: BR_COLORS.charcoal,
          boxShadow: "none",
          borderBottom: `1px solid ${BR_COLORS.lightGrey}`,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 400,
            fontSize: "0.975rem",
            backgroundColor: BR_COLORS.warmWhite,
            borderRadius: 0,
            "& fieldset": {
              borderColor: BR_COLORS.divider,
              borderRadius: 0,
            },
            "&:hover fieldset": {
              borderColor: BR_COLORS.charcoal,
            },
            "&.Mui-focused fieldset": {
              borderColor: BR_COLORS.charcoal,
              borderWidth: "1px",
            },
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 400,
          color: BR_COLORS.charcoal,
          textDecoration: "none",
          "&:hover": {
            opacity: 0.6,
          },
        },
      },
    },
  },
});

export default theme;
