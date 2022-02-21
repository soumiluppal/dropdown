import DropdownItem from "../DropdownItem";
import { getTextToDisplay } from "../getTextToDisplay";

describe("getTextToDisplay", () => {
  it("should return a string with a list of all selected values", () => {
    const childrenArray = [
      <DropdownItem value="one">One</DropdownItem>,
      <DropdownItem value="two">Two</DropdownItem>,
      <DropdownItem value="three">Three</DropdownItem>,
    ];

    const selectedValues = ["one", "three"];

    expect(getTextToDisplay(childrenArray, selectedValues)).toBe("One, Three");
  });
});
