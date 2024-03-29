import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: ${(props) => props.theme.spacing.l};
  background: ${(props) => props.theme.colors.secondary.a};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.primary.a};
  border-radius: ${(props) => props.theme.spacing.s};
`;

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Card;
