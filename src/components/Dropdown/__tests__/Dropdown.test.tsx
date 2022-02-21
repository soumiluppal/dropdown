import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "..";
import DropdownItem from "../DropdownItem";

describe("DropdownItem", () => {
  it("should render", () => {
    render(<Dropdown label="Test Label" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should open and close menu on click", async () => {
    render(
      <Dropdown label="Test Dropdown">
        <DropdownItem value="test">Test Item</DropdownItem>
      </Dropdown>
    );
    userEvent.click(screen.getByRole("button"));

    await waitFor(() =>
      expect(screen.getByText("Test Item")).toBeInTheDocument()
    );

    userEvent.click(screen.getAllByRole("button")[0]);

    await waitFor(() =>
      expect(screen.queryByText("Test Item")).not.toBeInTheDocument()
    );
  });

  it("should select an item on click", async () => {
    render(
        <Dropdown label="Test Dropdown">
          <DropdownItem value="test">Test Item</DropdownItem>
        </Dropdown>
      );
      userEvent.click(screen.getByRole("button"));
  
      await waitFor(() =>
        expect(screen.getByText("Test Item")).toBeInTheDocument()
      );
  
      userEvent.click(screen.getByText("Test Item"));
  
      await waitFor(() =>
        expect(screen.getByDisplayValue("Test Item")).toBeInTheDocument()
      );
  });

  it("should select multiple items on click", async () => {
    render(
        <Dropdown label="Test Dropdown" multiselect>
          <DropdownItem value="test1">Test Item 1</DropdownItem>
          <DropdownItem value="test2">Test Item 2</DropdownItem>
          <DropdownItem value="test3">Test Item 3</DropdownItem>
        </Dropdown>
      );
      userEvent.click(screen.getByRole("button"));
  
      await waitFor(() =>
        expect(screen.getByText("Test Item 1")).toBeInTheDocument()
      );
  
      userEvent.click(screen.getByText("Test Item 1"));
      userEvent.click(screen.getByText("Test Item 2"));
  
      await waitFor(() =>
        expect(screen.getByDisplayValue("Test Item 1, Test Item 2")).toBeInTheDocument()
      );

      userEvent.click(screen.getByText("Test Item 2"));
      userEvent.click(screen.getByText("Test Item 3"));

      await waitFor(() =>
        expect(screen.getByDisplayValue("Test Item 1, Test Item 3")).toBeInTheDocument()
      );

      userEvent.click(screen.getAllByRole("button")[0]);
  });

  it("should select and deselect all items", async () => {
    render(
        <Dropdown label="Test Dropdown" multiselect>
          <DropdownItem value="test1">Test Item 1</DropdownItem>
          <DropdownItem value="test2">Test Item 2</DropdownItem>
          <DropdownItem value="test3">Test Item 3</DropdownItem>
        </Dropdown>
      );
      userEvent.click(screen.getByRole("button"));
  
      await waitFor(() =>
        expect(screen.getByText("Select All")).toBeInTheDocument()
      );
  
      userEvent.click(screen.getByText("Select All"));
  
      await waitFor(() =>
        expect(screen.getByDisplayValue("Test Item 1, Test Item 2, Test Item 3")).toBeInTheDocument()
      );

      userEvent.click(screen.getByText("Deselect All"));
  
      await waitFor(() =>
        expect(screen.queryByDisplayValue("Test Item 1, Test Item 2, Test Item 3")).not.toBeInTheDocument()
      );

      userEvent.click(screen.getAllByRole("button")[0]);
  });

  it("should call onChange function", async () => {
    const onChange = jest.fn();

    render(
        <Dropdown label="Test Dropdown" onChange={onChange}>
          <DropdownItem value="test">Test Item</DropdownItem>
        </Dropdown>
      );
      userEvent.click(screen.getByRole("button"));
  
      await waitFor(() =>
        expect(screen.getByText("Test Item")).toBeInTheDocument()
      );
  
      userEvent.click(screen.getByText("Test Item"));
  
      await waitFor(() =>
        expect(onChange).toHaveBeenCalled()
      );
  });
});
