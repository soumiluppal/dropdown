import React from "react";
import { DropdownItemValue } from "./DropdownItem";

export const getTextToDisplay = (
  childrenArray: (React.ReactChild | React.ReactFragment | React.ReactPortal)[],
  selectedValues: DropdownItemValue[]
) => {
  return childrenArray
    .reduce(
      (textToDisplay, child) =>
        React.isValidElement(child) &&
        selectedValues.includes(child.props.value)
          ? textToDisplay +
            `${!!textToDisplay ? ", " : ""}${child.props.children.toString()}`
          : textToDisplay,
      ""
    )
    .toString();
};
