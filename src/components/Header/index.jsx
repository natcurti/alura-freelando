import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { Logo } from "../Icons/Logo";
import { Link } from "../Link";

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.spacing.m};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Row align="center" style={{ paddingInline: "120px" }}>
        <Col lg={6} md={6} sm={6}>
          <Logo />
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link>Login</Link>
          </div>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
