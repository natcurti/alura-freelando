import { Global } from "@emotion/react";

const styles = (theme) => {
  return {
    html: {
      fontFamily: theme.fontFamily,
    },
    body: {
      margin: 0,
    },
    "#root": {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };
};

const Styles = () => {
  return <Global styles={styles} />;
};

export default Styles;
