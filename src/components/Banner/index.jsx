import styled from "@emotion/styled";
import banner from "./assets/banner.png";
import Typography from "../Typography";
import Button from "../Button";
import { Link } from "react-router-dom";
import { Col } from "react-grid-system";

const SectionStyled = styled.section`
  min-height: 650px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.neutral.c};
  padding: ${(props) => props.theme.spacing.s};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${(props) => props.theme.spacing.l};
  color: ${(props) => props.theme.colors.primary.b};

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 0;
  }

  @media (min-width: 900px) {
    padding-inline: ${(props) => props.theme.spacing.xl};
  }
`;

const ImgStyled = styled.img`
  width: 500px;
  @media (min-width: 900px) {
    width: 550px;
  }
  @media (min-width: 1200px) {
    width: 750px;
  }
`;

const Banner = () => {
  return (
    <SectionStyled>
      <Col md={4}>
        <Typography variant="h2" component="h1">
          Uma ponte entre os freelas mais talentosos e os projetos mais
          interessantes!
        </Typography>
        <Link to="/cadastro">
          <Button>Quero me cadastrar!</Button>
        </Link>
      </Col>
      <Col style={{ textAlign: "center" }}>
        <ImgStyled
          src={banner}
          alt="Imagem retratando três pessoas, sendo duas mulheres e um homem. Eles estão sentados, parecem estar alegres e estão em frente ao computador."
        />
      </Col>
    </SectionStyled>
  );
};

export default Banner;
