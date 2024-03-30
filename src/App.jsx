import { Col, Container, Row } from "react-grid-system";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Styles from "./components/GlobalStyles";
import Header from "./components/Header";
import ProviderTheme from "./components/ProviderTheme";
import TextField from "./components/TextField";
import Typography from "./components/Typography";
import Button from "./components/Button";

function App() {
  return (
    <ProviderTheme>
      <Styles />
      <Header />
      <Container>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Typography variant="h1" component="h1">
                Freelando
              </Typography>
              <Typography variant="body" component="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Typography>
              <Row>
                <Col>
                  <TextField title="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <TextField title="Estado" />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <TextField title="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField title="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Repetir Senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variant="secondary">Anterior</Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Button variant="primary">Próximo</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ProviderTheme>
  );
}

export default App;