import Card from "../../components/Card";
import { Container, Row } from "react-grid-system";
import logo from "./assets/logo-freelando.png";
import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { Link } from "../../components/Link";
import styled from "@emotion/styled";
import ForgotPassword from "./ForgotPassword";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserSessionContext } from "../../context/UserSession";

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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { login, isLoggedIn } = useContext(UserSessionContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, senha);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/area-logada/perfil");
    }
  }, [isLoggedIn, navigate]);

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
          <FormContainer onSubmit={handleLogin}>
            <ContainerTypography>
              <Typography variant="h1" component="h1">
                Efetuar Login
              </Typography>
            </ContainerTypography>
            <TextField
              title="Email"
              typeOfInput="email"
              value={email}
              onChange={setEmail}
            />
            <TextField
              title="Senha"
              typeOfInput="password"
              value={senha}
              onChange={setSenha}
            />
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
              <RouterLink to="/cadastro" style={{ textDecoration: "none" }}>
                <Link variant="secondary">Cadastre-se clicando aqui!</Link>
              </RouterLink>
            </div>
          </FormContainer>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;
