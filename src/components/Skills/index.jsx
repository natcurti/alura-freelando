import styled from "@emotion/styled";
import Typography from "../Typography";

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

const ContainerSkills = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.m};
`;

const Skills = () => {
  return (
    <SectionStyled>
      <Typography variant="h2" component="h2">
        Quais habilidades você encontra por aqui?
      </Typography>
      <ContainerSkills>
        {skillsArray.map((skill, index) => (
          <SkillCard key={index}>{skill}</SkillCard>
        ))}
      </ContainerSkills>
    </SectionStyled>
  );
};

export default Skills;
