import Typography from "../Typography";
import BlueCard from "./BlueCard";
import { CertifiedIcon } from "./Icons/CertifiedIcon";
import { Connections } from "./Icons/Connections";
import { Service } from "./Icons/Service";
import { SecurityIcon } from "./Icons/SecurityIcon";
import styled from "@emotion/styled";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.neutral.a};
`;

const ContainerCards = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.m};
`;

const AdvantagesCustomer = () => {
  return (
    <SectionStyled>
      <Typography variant="h2" component="h2">
        Vantagens para contratantes
      </Typography>
      <ContainerCards>
        <BlueCard title="Profissionais qualificados">
          <CertifiedIcon />
        </BlueCard>
        <BlueCard title="Múltiplas especialidades">
          <Connections />
        </BlueCard>
        <BlueCard title="Atendimento e agilidade">
          <Service />
        </BlueCard>
        <BlueCard title="Simplicidade e Segurança">
          <SecurityIcon />
        </BlueCard>
      </ContainerCards>
    </SectionStyled>
  );
};

export default AdvantagesCustomer;
