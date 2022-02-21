import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownItem from "..";

describe("DropdownItem", () => {
  it("should render", () => {
    render(
      <DropdownItem value="Test Value">Test Children</DropdownItem>
    );

    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("should call onClick function", () => {
    const onClick = jest.fn()

    render(
      <DropdownItem value="Test Value" onClick={onClick}>Test Children</DropdownItem>
    );
    userEvent.click(screen.getByText("Test Children"));

    expect(onClick).toHaveBeenCalled();
  });

  it("should render a checkbox", () => {
    const {container} = render(
      <DropdownItem value="Test Value" withCheckbox>Test Children</DropdownItem>
    );

    expect(container.querySelector("input")).toBeInTheDocument();
  });
});
