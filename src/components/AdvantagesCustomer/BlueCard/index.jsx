/* eslint-disable react/prop-types */
import Typography from "../../Typography";
import styled from "@emotion/styled";

const ContainerCard = styled.div`
  width: 282px;
  background-color: ${(props) => props.theme.colors.secondary.a};
  color: ${(props) => props.theme.colors.primary.a};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: ${(props) => props.theme.spacing.s};
  padding-top: ${(props) => props.theme.spacing.s};
  box-sizing: border-box;
`;

const BlueCard = ({ title, children }) => {
  return (
    <ContainerCard>
      {children}
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
    </ContainerCard>
  );
};

export default BlueCard;
