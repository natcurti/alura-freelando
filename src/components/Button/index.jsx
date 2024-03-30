/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const PrimaryButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primary.b};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.spacing.s};
  padding-inline: ${(props) => props.theme.spacing.s};
  padding-top: ${(props) => props.theme.spacing.xs};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  &:hover {
    background: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.dark.d};
  }
`;

const SecondaryButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.secondary.a};
  color: ${(props) => props.theme.colors.primary.b};
  border: 2px solid ${(props) => props.theme.colors.primary.b};
  border-radius: ${(props) => props.theme.spacing.s};
  padding-inline: ${(props) => props.theme.spacing.s};
  padding-top: ${(props) => props.theme.spacing.xs};
  padding-bottom: ${(props) => props.theme.spacing.xs};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.dark.b};
    color: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.focus};
  }
`;

const Button = ({ children, variant = "primary" }) => {
  if (variant === "primary") {
    return <PrimaryButtonStyled>{children}</PrimaryButtonStyled>;
  }
  return <SecondaryButtonStyled>{children}</SecondaryButtonStyled>;
};

export default Button;
