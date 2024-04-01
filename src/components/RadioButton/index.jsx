/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.xs};
  &:hover {
    &:before {
      border-color: ${(props) => props.theme.colors.focus};
    }
  }
  &:before {
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.neutral.a};
    border-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${(props) =>
      props.checked
        ? props.theme.colors.primary.b
        : props.theme.colors.neutral.c};
    border-color: ${(props) =>
      props.checked ? props.theme.colors.primary.b : "inherit"};
  }
`;

const InputStyled = styled.input`
  appearance: none;
  opacity: 0;
  &:focus + label {
    border-radius: 16px;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.focus};
  }
`;

const RadioButton = ({ title, checked, value, onClick }) => {
  return (
    <>
      <InputStyled
        type="radio"
        value={value}
        checked={checked}
        onChange={onClick}
        id={`radio-${value}`}
      />
      <LabelStyled htmlFor={`radio-${value}`} checked={checked}>
        {title}
      </LabelStyled>
    </>
  );
};

export default RadioButton;
