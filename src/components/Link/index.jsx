/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const PrimaryLink = styled.span`
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.white};
  &:hover {
    color: ${(props) => props.theme.colors.dark.a};
  }
`;
const SecondaryLink = styled.span`
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.primary.b};
  &:hover {
    font-weight: bold;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary.b};
  }
`;
export const Link = ({ children, variant = "primary" }) => {
  if (variant === "primary") {
    return <PrimaryLink variant={variant}>{children}</PrimaryLink>;
  }
  return <SecondaryLink variant={variant}>{children}</SecondaryLink>;
};
