import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { Logo } from "../Icons/Logo";
import { Link } from "../Link";
import { Link as RouterLink } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.m};
  width: 100%;
  padding-inline: 40px;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Row align="center">
        <Col sm={8}>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Col>
        <Col sm={4}>
          <div style={{ textAlign: "right" }}>
            <RouterLink to="login" style={{ textDecoration: "none" }}>
              <Link variant="primary">Login</Link>
            </RouterLink>
          </div>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
