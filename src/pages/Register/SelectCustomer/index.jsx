import { Col, Row } from "react-grid-system";
import Typography from "../../../components/Typography";
import { Link } from "../../../components/Link";
import customer from "../assets/customer.png";
import freela from "../assets/freela.png";

const SelectCustomer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1" component="h1">
        Crie seu cadastro
      </Typography>
      <Typography variant="h3" component="h2">
        Como podemos te ajudar?
      </Typography>
      <Row>
        <Col md={6} sm={12}>
          <img
            src={customer}
            alt="Mulher de cabelos escuros cacheados e óculos, com a mão apoiada no rosto olhando compenetrada para uma tela."
          />
          <Typography variant="body" component="body">
            Sou cliente e preciso de um freela!
          </Typography>
        </Col>
        <Col md={6} sm={12}>
          <img
            src={freela}
            alt="Homem de cabelos escuros curtos, camisa clara e relógio de pulso falando e gesticulando com as mãos."
          />
          <Typography variant="body" component="body">
            Sou freela e preciso de um cliente!
          </Typography>
        </Col>
      </Row>
      <Typography variant="body2" component="body2">
        Já tem conta?
      </Typography>
      <p>
        <Link variant="secondary">Faça login</Link>
      </p>
    </div>
  );
};

export default SelectCustomer;
