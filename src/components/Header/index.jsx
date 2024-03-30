import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.m};
`;

const Header = () => {
  return <HeaderContainer></HeaderContainer>;
};

export default Header;
