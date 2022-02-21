# Dropdown Component

This is a repo for a reusable dropdown component

## How to use the component

```
<Dropdown label="Label goes here">
    <DropdownItem value="one">One</DropdownItem>
    <DropdownItem value="two">Two</DropdownItem>
    <DropdownItem value="three">Three</DropdownItem>
    <DropdownItem value="four">Four</DropdownItem>
    <DropdownItem value="five">Five</DropdownItem>
</Dropdown>
```

The multiselect prop can be used to allow the user to select multiple items at once like so:
```
<Dropdown label="Label goes here" multiselect>
```

To access selected values, the `onChange` prop can be used:
```
<Dropdown label="Label goes here" onChange={(value) => {//do something}}>
```

## Installation

- Clone the repo and install the dependencies:
  - `git clone https://github.com/soumiluppal/dropdown.git`
  - `cd ./dropdown`
  - `yarn install`

## Commands

### `yarn start`

Runs the app in the development mode locally. You can view the demos at `localhost:3000` in `App.tsx`.

### `yarn test`

Runs the test modules in watch mode.
