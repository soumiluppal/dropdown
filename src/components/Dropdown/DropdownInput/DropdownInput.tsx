import React, { FC } from "react";
import styled from "styled-components";
import downArrow from "./down-arrow.svg";

interface DropdownInputProps {
  placeholder: string;
  value: string;
  onClick: () => void;
}

const DropdownInput: FC<DropdownInputProps> = (props) => {
  const { placeholder, value, onClick } = props;

  return (
    <SelectButtonContainer>
      <SelectButton
        readOnly
        onClick={onClick}
        value={value}
        placeholder={placeholder}
      />
      <SelectIcon src={downArrow} />
    </SelectButtonContainer>
  );
};

const SelectButtonContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButton = styled.input`
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  caret-color: transparent;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 25px;
  box-sizing: border-box;
`;

const SelectIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 15px;
  pointer-events: none;
`

export default DropdownInput;
