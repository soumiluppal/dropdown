import React, { FC } from "react";
import styled from "styled-components";

export type DropdownItemValue = string | number;

interface DropdownItemProps {
  value: string | number;
  withCheckbox?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const DropdownItem: FC<DropdownItemProps> = (props) => {
  const { children, withCheckbox, onClick, selected, disabled } = props;
  return (
    <ItemButton selected={!!selected} disabled={disabled} onClick={onClick}>
      {withCheckbox && (
        <input type="checkbox" data-test-id="checkbox" checked={!!selected} readOnly/>
      )}
      {children}
    </ItemButton>
  );
};

const ItemButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  text-align: left;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  ${({ selected }: { selected: boolean }) =>
    selected &&
    `
    background: rgba(0, 0, 100, 0.2);
    &:hover {
      background: rgba(0, 0, 100, 0.2);
    }
  `}
`;

export default DropdownItem;
