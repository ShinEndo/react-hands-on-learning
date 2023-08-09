import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox02 } from "./Checkbox02";

test("Selecting the checkbox should change the value of chekced to true", ()=>{
    const { getByLabelText } = render(<Checkbox02 />);
    const checkbox = getByLabelText(/not chekced/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
});