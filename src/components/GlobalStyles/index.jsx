import { Global, css } from "@emotion/react";

const styles = css`
  * {
    font-family: "Montserrat", sans-serif;
  }
`;

const Styles = () => {
  return <Global styles={styles} />;
};

export default Styles;
