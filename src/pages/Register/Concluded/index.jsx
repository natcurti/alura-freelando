import styled from "@emotion/styled";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import imgConcluded from "../assets/concluded-img.png";
import CardHeader from "../../../components/CardHeader";

const ImgStyled = styled.img`
  margin-bottom: ${(props) => props.theme.spacing.s};
`;

const Concluded = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CardHeader
        title="Seu perfil está completo!"
        subtitle="Agora é só começar a se conectar com os melhores freelancers do mercado!"
        variant="body"
        component="body"
      />
      <ImgStyled
        src={imgConcluded}
        alt="Mulher jovem de cabelos cacheados e óculos, sentada à frente de um computador com a mão apoiada no queixo e expressão sorridente."
      />
      <Link to="/cadastro">
        <Button variant="secondary">Voltar para a home</Button>
      </Link>
    </div>
  );
};

export default Concluded;
