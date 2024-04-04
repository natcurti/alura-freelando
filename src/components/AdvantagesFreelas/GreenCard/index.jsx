/* eslint-disable react/prop-types */
import Typography from "../../Typography";
import styled from "@emotion/styled";

const ContainerCard = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.colors.secondary.c};
  color: ${(props) => props.theme.colors.primary.c};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.s};
  border-radius: ${(props) => props.theme.spacing.s};
  padding: ${(props) => props.theme.spacing.m};
  box-sizing: border-box;
`;

const GreenCard = ({ title, children }) => {
  return (
    <ContainerCard>
      {children}
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
    </ContainerCard>
  );
};

export default GreenCard;
