import styled from "@emotion/styled";
import Typography from "../Typography";
import { Row } from "react-grid-system";

const skillsArray = [
  "Design",
  "Branding",
  "lustração",
  "Marketing",
  "Identidade Visual",
  "SEO",
  "Redação",
  "Transcricão",
  "Revisão",
  "Tradução",
  "E-Books",
  "ABNT",
  "Programação",
  "API",
  "Desenvolvimento de Aplicativo",
  "Desenvolvimento de Websites",
];

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.neutral.a};
  text-align: center;
`;

const SkillCard = styled.div`
  border-radius: ${(props) => props.theme.spacing.m};
  background-color: ${(props) => props.theme.colors.neutral.c};
  border-color: ${(props) => props.theme.colors.neutral.a};
  border: 1px solid;
  padding-inline: ${(props) => props.theme.spacing.s};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  &:hover {
    border-color: ${(props) => props.theme.colors.primary.b};
    color: ${(props) => props.theme.colors.primary.b};
    cursor: pointer;
  }
`;

const Skills = () => {
  return (
    <SectionStyled>
      <Typography variant="h2" component="h2">
        Quais habilidades você encontra por aqui?
      </Typography>
      <Row justify="center" style={{ gap: "16px", width: "100%" }}>
        {skillsArray.map((skill, index) => (
          <SkillCard key={index}>{skill}</SkillCard>
        ))}
      </Row>
    </SectionStyled>
  );
};

export default Skills;
