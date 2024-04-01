/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { useState } from "react";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  height: 40px;
  width: 100%;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0" : "18px")};
  margin-top: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  &:focus {
    border-color: ${(props) => props.theme.colors.focus};
  }
`;

const DropDownItemStyled = styled.li`
  padding: ${(props) => props.theme.spacing.xs} 0;
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral.c};
  cursor: pointer;
  color: ${(props) =>
    props.focusActive ? props.theme.colors.focus : "inherit"};
  &:last-child {
    border: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.focus};
  }
`;

const DropDownListStyled = styled.ul`
  max-height: 250px;
  overflow: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: none;
  margin: 0;
  padding: 0 ${(props) => props.theme.spacing.xs};
  list-style: none;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
    border-radius: 18px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.neutral.a};
    border-radius: 18px;
  }
`;

const DropDown = ({ title, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedOption, setFocusedOption] = useState(null);

  const handleKeyboard = (e) => {
    setIsOpen(true);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedOption((previousOption) => {
          if (previousOption == null) {
            return 0;
          }
          if (previousOption === options.length - 1) {
            return 0;
          }
          return (previousOption += 1);
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedOption((previousOption) => {
          if (!previousOption) {
            return 0;
          }
          return (previousOption -= 1);
        });
        break;
      case "Enter":
        e.preventDefault();
        setFocusedOption(null);
        setIsOpen(false);
        onChange(options[focusedOption]);
        break;
      case "Escape":
      case "Tab":
        e.preventDefault();
        setFocusedOption(null);
        setIsOpen(false);
        onChange(null);
        break;

      default:
        break;
    }
  };

  return (
    <StyledLabel>
      {title}
      <StyledButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        onKeyDown={handleKeyboard}
        type="button"
      >
        <div>{value ? value.text : "Selecione"}</div>
        <div>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>
      </StyledButton>
      {isOpen && (
        <DropDownListStyled>
          {options.map((option, index) => (
            <DropDownItemStyled
              key={option.value}
              focusActive={index === focusedOption}
              onClick={() => onChange(option)}
            >
              {option.text}
            </DropDownItemStyled>
          ))}
        </DropDownListStyled>
      )}
    </StyledLabel>
  );
};

export default DropDown;
