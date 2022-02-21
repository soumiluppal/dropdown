import React, { FC, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { DropdownItemValue } from "./DropdownItem";
import DropdownInput from "./DropdownInput";
import { getTextToDisplay } from "./getTextToDisplay";

interface DropdownProps {
  label: string;
  multiselect?: boolean;
  onChange?: (
    values: DropdownItemValue | DropdownItemValue[] | undefined
  ) => void;
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { label, multiselect, onChange, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<DropdownItemValue[]>([]);
  const childrenArray = React.Children.toArray(children);

  useEffect(
    () =>
      onChange &&
      onChange(
        multiselect ? selectedValues[0] : selectedValues
      ),
    [selectedValues]
  );

  useEffect(() => {
    setTimeout(
      () => isOpen && window.addEventListener("click", handleClose),
      0
    );
  }, [isOpen]);

  const handleClose = () => {
    window.removeEventListener("click", handleClose);
    setIsOpen(false);
  };

  const handleItemClick = (e: MouseEvent, dropdownItem: ReactElement) => {
    const itemValue = dropdownItem.props.value;

    if (!!multiselect) {
      e.stopPropagation();
      selectedValues.includes(itemValue)
        ? setSelectedValues([
            ...selectedValues.filter((value) => value !== itemValue),
          ])
        : setSelectedValues([...selectedValues, itemValue]);
    } else {
      itemValue !== selectedValues[0] && setSelectedValues([itemValue]);
    }
  };

  const handleSelectAll = () => {
    setSelectedValues(
      childrenArray.map((child) =>
        React.isValidElement(child) ? child.props.value : null
      )
    );
  };

  const handleDeselectAll = () => {
    setSelectedValues([]);
  };

  return (
    <DropdownContainer>
      <Label hide={!selectedValues.length}>{label}</Label>
      <DropdownMenuContainer>
        <DropdownInput
          onClick={() => setIsOpen(!isOpen)}
          value={getTextToDisplay(childrenArray, selectedValues)}
          placeholder={label}
        />
        {isOpen && (
          <DropdownMenu>
            {!!multiselect && (
              <div>
                <AllButton onClick={handleSelectAll}>Select All</AllButton>
                <AllButton onClick={handleDeselectAll}>Deselect All</AllButton>
              </div>
            )}
            {React.Children.map(children, (item) =>
              React.isValidElement(item)
                ? React.cloneElement(item, {
                    onClick: (e: MouseEvent) => handleItemClick(e, item),
                    selected: selectedValues.includes(item.props.value),
                    withCheckbox: !!multiselect,
                  })
                : null
            )}
          </DropdownMenu>
        )}
      </DropdownMenuContainer>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10em;
`;

const DropdownMenuContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 12px;
  text-align: left;
  ${({ hide }: { hide: boolean }) =>
    hide &&
    `
    visibility: hidden;
  `}
`;

const AllButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
  margin: 5px;
  font-size: 12px;
  padding: 0;
`;

// Added scrollbar to indicate to the user that they can scroll to see more items

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  min-width: 5em;
  border: solid 1px lightgray;
  max-height: 10rem;
  overflow-y: auto;
  z-index: 3;
  position: absolute;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export default Dropdown;
