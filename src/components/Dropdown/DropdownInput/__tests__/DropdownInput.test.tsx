import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownInput from "..";

describe("DropdownInput", () => {
  it("should render", () => {
    render(
      <DropdownInput placeholder="Test Input" value="Test Value" onClick={jest.fn()} />
    );

    expect(screen.getByDisplayValue("Test Value")).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const onClick = jest.fn();

    render(
        <DropdownInput placeholder="Test Input" value="Test Value" onClick={onClick} />
      );
  
      const inputButton = screen.getByDisplayValue("Test Value");
      userEvent.click(inputButton);
      expect(onClick).toHaveBeenCalled();
  })
});
