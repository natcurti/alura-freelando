import styled from "@emotion/styled";
import { Logo } from "../Icons/Logo";
import { Link } from "../Link";
import { Link as RouterLink } from "react-router-dom";
import Typography from "../Typography";
import avatar from "./assets/avatar.svg";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.m};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding-inline: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const LogoContainer = styled.div`
  width: 247px;
`;

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    gap: 24px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </LogoContainer>
      <MenuContainer>
        <Typography variant="body2" component="body">
          Contrate
        </Typography>
        <Typography variant="body2" component="body">
          Encontre Trabalho
        </Typography>
        <Typography variant="body2" component="body">
          Meus projetos
        </Typography>
        <img src={avatar} alt="Silhueta de um usuário" />
        <div style={{ textAlign: "right" }}>
          <RouterLink to="login" style={{ textDecoration: "none" }}>
            <Link variant="primary">Login</Link>
          </RouterLink>
        </div>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
