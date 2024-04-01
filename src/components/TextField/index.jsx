import styled from "@emotion/styled";

const LabelStyled = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const InputStyled = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.spacing.s};
  margin-top: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.neutral.a};
  border-radius: ${(props) => props.theme.spacing.s};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

// eslint-disable-next-line react/prop-types
const TextField = ({ title, value, onChange, typeOfInput = "text" }) => {
  return (
    <LabelStyled>
      {title}
      <InputStyled
        type={typeOfInput}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </LabelStyled>
  );
};

export default TextField;
