import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./components/Dropdown";
import DropdownItem from "./components/Dropdown/DropdownItem";

function App() {
  return (
    <div className="App">
      <Dropdown label="Choose Something" multiselect>
        <DropdownItem value="one">One</DropdownItem>
        <DropdownItem value="two">Two</DropdownItem>
        <DropdownItem value="three">Three</DropdownItem>
        <DropdownItem value="four">Four</DropdownItem>
        <DropdownItem value="five">Five</DropdownItem>
      </Dropdown>
    </div>
  );
}

export default App;
