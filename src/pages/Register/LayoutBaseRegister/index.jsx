import { Col, Row } from "react-grid-system";
import Card from "../../../components/Card";
import { Outlet } from "react-router-dom";
import { RegisterUserProvider } from "../../../context/RegisterUserContext";

const LayoutBaseRegister = () => {
  return (
    <RegisterUserProvider>
      <Row justify="center">
        <Col md={8} sm={12}>
          <Card>
            <Outlet />
          </Card>
        </Col>
      </Row>
    </RegisterUserProvider>
  );
};

export default LayoutBaseRegister;
