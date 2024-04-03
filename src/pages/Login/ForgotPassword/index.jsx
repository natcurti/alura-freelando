import styled from "@emotion/styled";

const LinkStyled = styled.a`
  color: ${(props) => props.theme.colors.neutral.a};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ForgotPassword = () => {
  return <LinkStyled href="#">Esqueceu sua senha?</LinkStyled>;
};

export default ForgotPassword;
