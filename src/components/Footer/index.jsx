import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.white};
`;

const Footer = () => {
  return <FooterStyled></FooterStyled>;
};

export default Footer;
