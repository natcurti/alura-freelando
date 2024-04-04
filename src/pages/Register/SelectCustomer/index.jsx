import { Col, Row } from "react-grid-system";
import Typography from "../../../components/Typography";
import { Link } from "../../../components/Link";
import customer from "../assets/customer.png";
import freela from "../assets/freela.png";
import { Link as RouterLink } from "react-router-dom";
import CardHeader from "../../../components/CardHeader";
import { useContext } from "react";
import { RegisterUserContext } from "../../../context/RegisterUserContext";

const SelectCustomer = () => {
  const { setPerfil } = useContext(RegisterUserContext);

  return (
    <div style={{ textAlign: "center" }}>
      <CardHeader
        title="Crie seu cadastro"
        subtitle="Como podemos te ajudar?"
        variant="h3"
        component="h2"
      />
      <Row>
        <Col md={6} sm={12}>
          <RouterLink
            to="interesses"
            onClick={() => setPerfil("Client")}
            style={{ textDecoration: "none" }}
          >
            <img
              src={customer}
              alt="Mulher de cabelos escuros cacheados e óculos, com a mão apoiada no rosto olhando compenetrada para uma tela."
            />
            <Typography variant="body" component="body">
              Sou cliente e preciso de um freela!
            </Typography>
          </RouterLink>
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
        <RouterLink to="/login" style={{ textDecoration: "none" }}>
          <Link variant="secondary">Faça login</Link>
        </RouterLink>
      </p>
    </div>
  );
};

export default SelectCustomer;
