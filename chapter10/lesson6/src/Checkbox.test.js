import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting the checkbox should change the value of chekced to true", ()=>{
    const { getByTestId } = render(<Checkbox />);
    const checkbox = getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
});