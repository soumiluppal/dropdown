import React, { FC } from "react";
import DropdownItem, { DropdownItemValue } from "./DropdownItem";

interface ListToDropdownItemsProps {
  itemList: DropdownItemValue[];
}

// Helper component to render dropdown items from a list of numbers or string

const ListToDropdownItems: FC<ListToDropdownItemsProps> = (props) => {
  const { itemList } = props;

  return (
    <>
      {itemList.map((item: DropdownItemValue, index) => (
        <DropdownItem key={index} value={index}>{item}</DropdownItem>
      ))}
    </>
  );
};

export default ListToDropdownItems;
