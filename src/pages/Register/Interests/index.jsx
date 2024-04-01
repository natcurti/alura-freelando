/* eslint-disable react/prop-types */
import { useState } from "react";
import RadioButton from "../../../components/RadioButton";
import Typography from "../../../components/Typography";
import Button from "../../../components/Button";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";

const options = [
  {
    value: 1,
    label: "TI e Programação",
  },
  {
    value: 2,
    label: "Design e Multimídia",
  },
  {
    value: 3,
    label: "Revisão",
  },
  {
    value: 4,
    label: "Tradução",
  },
  {
    value: 5,
    label: "Transcrição",
  },
  {
    value: 6,
    label: "Marketing",
  },
];

const Interests = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1" component="h1">
        Crie seu cadastro
      </Typography>
      <Typography variant="h3" component="h2">
        Qual a área de interesse?
      </Typography>
      <div style={{ marginBottom: "24px" }}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            value={option.label}
            title={option.label}
            checked={option.label === selectedOption}
            onClick={() => setSelectedOption(option.label)}
          />
        ))}
      </div>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "left" }}>
            <Link to="/cadastro/">
              <Button variant="secondary">Anterior</Button>
            </Link>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Button variant="primary">Próximo</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Interests;
