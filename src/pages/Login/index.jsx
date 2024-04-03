import Card from "../../components/Card";
import { Container, Row } from "react-grid-system";
import logo from "./assets/logo-freelando.png";
import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import { Link } from "../../components/Link";
import Button from "../../components/Button";
import styled from "@emotion/styled";
import ForgotPassword from "./ForgotPassword";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  marginTop: "80px",
  marginBottom: "80px",
};

const ContainerTypography = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.neutral.a};
`;

const DivisorStyled = styled.div`
  width: 380px;
  height: 1px;
  margin-bottom: ${(props) => props.theme.spacing.m};
  background-color: ${(props) => props.theme.colors.primary.a};
  @media (min-width: 768px) {
    width: 575px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  @media (min-width: 768px) {
    width: 588px;
  }
`;

const Login = () => {
  return (
    <Container style={containerStyles}>
      <Row>
        <img
          src={logo}
          alt="Logo Freelando. Silhueta de um mouse com fio em volta"
        />
      </Row>
      <Row>
        <Card>
          <FormContainer>
            <ContainerTypography>
              <Typography variant="h1" component="h1">
                Efetuar Login
              </Typography>
            </ContainerTypography>
            <TextField title="Email" typeOfInput="email" />
            <TextField title="Senha" typeOfInput="password" />
            <div style={{ width: "100%", textAlign: "right" }}>
              <ForgotPassword />
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Button>Login</Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <DivisorStyled />
              <Typography variant="body2" component="body2">
                Ainda não criou sua conta no Freelando?
              </Typography>
              <Link variant="secondary">Cadastre-se clicando aqui!</Link>
            </div>
          </FormContainer>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;
