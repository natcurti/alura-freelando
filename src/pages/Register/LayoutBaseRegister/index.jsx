import { Col, Row } from "react-grid-system";
import Card from "../../../components/Card";
import { Outlet } from "react-router-dom";

const LayoutBaseRegister = () => {
  return (
    <Row justify="center">
      <Col md={8} sm={12}>
        <Card>
          <Outlet />
        </Card>
      </Col>
    </Row>
  );
};

export default LayoutBaseRegister;
