import { Global } from "@emotion/react";

const styles = (theme) => {
  return {
    html: {
      fontFamily: theme.fontFamily,
    },
    body: {
      margin: 0,
    },
  };
};

const Styles = () => {
  return <Global styles={styles} />;
};

export default Styles;
