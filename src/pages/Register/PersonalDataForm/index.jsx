import { Col, Row } from "react-grid-system";
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import DropDown from "../../../components/DropDown";
import { Link, useNavigate } from "react-router-dom";
import CardHeader from "../../../components/CardHeader";
import { useContext, useEffect } from "react";
import { RegisterUserContext } from "../../../context/RegisterUserContext";

const allStates = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

function PersonalDataForm() {
  const {
    user,
    setNome,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    setUf,
    submitUser,
    validateInterests,
  } = useContext(RegisterUserContext);

  const handleRegister = (e) => {
    e.preventDefault();
    submitUser();
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!validateInterests()) {
      navigate("/cadastro");
    }
  }, [validateInterests, navigate]);

  return (
    <form onSubmit={handleRegister}>
      <CardHeader
        title="Freelando"
        subtitle="Crie seu perfil gratuitamente para começar a trabalhar com os melhores
        freelancers. Em seguida, você poderá dar mais detalhes sobre suas
        demandas e sobre sua forma de trabalho."
        variant="body"
        component="body"
      />
      <Row>
        <Col>
          <TextField
            title="Nome Completo"
            value={user.nome}
            onChange={setNome}
            typeOfInput="text"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <DropDown
            title="Estado"
            options={allStates}
            value={user.uf}
            onChange={setUf}
          />
        </Col>
        <Col lg={8} md={8} sm={8}>
          <TextField
            title="Cidade"
            value={user.cidade}
            onChange={setCidade}
            typeOfInput="text"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            title="Email"
            typeOfInput="email"
            value={user.email}
            onChange={setEmail}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <TextField
            title="Senha"
            typeOfInput="password"
            value={user.senha}
            onChange={setSenha}
          />
        </Col>
        <Col lg={6} md={6} sm={6}>
          <TextField
            title="Repetir Senha"
            typeOfInput="password"
            value={user.senhaConfirmada}
            onChange={setSenhaConfirmada}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro/interesses">
            <Button variant="secondary">Anterior</Button>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Button variant="primary">Próximo</Button>
          </div>
        </Col>
      </Row>
    </form>
  );
}

export default PersonalDataForm;
