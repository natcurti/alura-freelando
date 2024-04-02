import Typography from "../Typography";
import GreenCard from "./GreenCard";
import { Projects } from "./Icons/Projects";
import { Checkout } from "./Icons/Checkout";
import { Relationship } from "./Icons/Relationship";
import { Customer } from "./Icons/Customer";
import styled from "@emotion/styled";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.neutral.a};
`;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.m};
`;

const AdvantagesFreelas = () => {
  return (
    <SectionStyled>
      <Typography variant="h2" component="h2">
        Vantagens para freelas
      </Typography>
      <ContainerCards>
        <GreenCard title="Clientes verificados">
          <Customer />
        </GreenCard>
        <GreenCard title="Atendimento e agilidade">
          <Relationship />
        </GreenCard>
        <GreenCard title="Projetos interessantes">
          <Projects />
        </GreenCard>
        <GreenCard title="Remuneração supervisionada">
          <Checkout />
        </GreenCard>
      </ContainerCards>
    </SectionStyled>
  );
};

export default AdvantagesFreelas;
