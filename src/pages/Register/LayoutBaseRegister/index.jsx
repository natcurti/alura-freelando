import { Col, Container, Row } from "react-grid-system";
import Card from "../../../components/Card";
import { Outlet } from "react-router-dom";
import { RegisterUserProvider } from "../../../context/RegisterUserContext";

const LayoutBaseRegister = () => {
  return (
    <RegisterUserProvider>
      <Container style={{ margin: "80px auto", width: "100%" }}>
        <Row justify="center">
          <Col md={8} sm={12}>
            <Card>
              <Outlet />
            </Card>
          </Col>
        </Row>
      </Container>
    </RegisterUserProvider>
  );
};

export default LayoutBaseRegister;
