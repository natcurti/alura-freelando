/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const StyledBlueCard = styled.div`
  width: 282px;
  height: 800px;
  background-color: ${(props) => props.theme.colors.secondary.a};
`;

const CardHome = ({ children }) => {
  return <StyledBlueCard>{children}</StyledBlueCard>;
};

export default CardHome;
