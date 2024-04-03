import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { Logo } from "../Icons/Logo";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.m};
  width: 100%;
  padding-inline: 40px;
  box-sizing: border-box;
`;

const LoginLink = styled.span`
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.white};
  &:hover {
    color: ${(props) => props.theme.colors.dark.a};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Row align="center">
        <Col sm={8}>
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col sm={4}>
          <div style={{ textAlign: "right" }}>
            <Link to="login" style={{ textDecoration: "none" }}>
              <LoginLink>Login</LoginLink>
            </Link>
          </div>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
