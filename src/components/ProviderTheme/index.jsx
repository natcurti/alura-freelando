import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    white: "",
    warning: "",
    focus: "",
    primary: {
      a: "#5754ed",
      b: "",
      c: "",
    },
    secondary: {
      a: "#ebeaf9",
      b: "",
      c: "",
    },
    neutral: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  spacing: {
    s: "16px",
    l: "32px",
  },
};

// eslint-disable-next-line react/prop-types
const ProviderTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ProviderTheme;
