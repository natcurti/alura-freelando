import styled from "@emotion/styled";
import banner from "./assets/banner.png";
import Typography from "../Typography";
import Button from "../Button";

const SectionStyled = styled.section`
  height: 600px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.neutral.c};
  padding-top: ${(props) => props.theme.spacing.m};
  padding-bottom: ${(props) => props.theme.spacing.m};
  padding-inline: ${(props) => props.theme.spacing.xxl};
  display: flex;
  align-items: center;
`;

const ContainerTitle = styled.div`
  color: ${(props) => props.theme.colors.primary.b};
`;

const Banner = () => {
  return (
    <SectionStyled>
      <ContainerTitle>
        <Typography variant="h1" component="h1">
          Uma ponte entre os freelas mais talentosos e os projetos mais
          interessantes!
        </Typography>
        <Button>Quero me cadastrar!</Button>
      </ContainerTitle>
      <div>
        <img
          src={banner}
          alt="Imagem retratando três pessoas, sendo duas mulheres e um homem. Eles estão sentados, parecem estar alegres e estão em frente ao computador."
        />
      </div>
    </SectionStyled>
  );
};

export default Banner;
