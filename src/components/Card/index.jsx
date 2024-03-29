import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: 32px;
  background: #ebeaf9;
  border: 1px solid #5754ed;
  border-radius: 16px;
`;

// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Card;
