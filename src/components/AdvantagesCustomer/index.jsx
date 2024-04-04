import Typography from "../Typography";
import BlueCard from "./BlueCard";
import { CertifiedIcon } from "./Icons/CertifiedIcon";
import { Connections } from "./Icons/Connections";
import { Service } from "./Icons/Service";
import { SecurityIcon } from "./Icons/SecurityIcon";
import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.neutral.a};
  gap: ${(props) => props.theme.spacing.m};
`;

const AdvantagesCustomer = () => {
  return (
    <SectionStyled>
      <Typography variant="h2" component="h2">
        Vantagens para contratantes
      </Typography>
      <Row justify="center" style={{ gap: "30px", width: "100%" }}>
        <Row>
          <Col>
            <BlueCard title="Profissionais qualificados">
              <CertifiedIcon />
            </BlueCard>
          </Col>
          <Col>
            <BlueCard title="Múltiplas especialidades">
              <Connections />
            </BlueCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <BlueCard title="Atendimento e agilidade">
              <Service />
            </BlueCard>
          </Col>
          <Col>
            <BlueCard title="Simplicidade e Segurança">
              <SecurityIcon />
            </BlueCard>
          </Col>
        </Row>
      </Row>
    </SectionStyled>
  );
};

export default AdvantagesCustomer;
