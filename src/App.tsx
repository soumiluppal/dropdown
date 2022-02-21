import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import DropdownItem from "./components/Dropdown/DropdownItem";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "20em", margin: "20px" }}>
          <h2>Multiselect dropdown demo:</h2>
          <Dropdown
            label="Pick A Number"
            multiselect
            onChange={(values) => null}
          >
            <DropdownItem value="one">One</DropdownItem>
            <DropdownItem value="two">Two</DropdownItem>
            <DropdownItem value="three">Three</DropdownItem>
            <DropdownItem value="four">Four</DropdownItem>
            <DropdownItem value="five">Five</DropdownItem>
          </Dropdown>
        </div>
        <div style={{ width: "20em", margin: "20px" }}>
          <h2>Single select dropdown demo:</h2>
          <Dropdown label="Pick A Number">
            <DropdownItem value="one">One</DropdownItem>
            <DropdownItem value="two">Two</DropdownItem>
            <DropdownItem value="three">Three</DropdownItem>
            <DropdownItem value="four">Four</DropdownItem>
            <DropdownItem value="five">Five</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default App;
