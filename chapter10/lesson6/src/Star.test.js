import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star";
import {render} from '@testing-library/react'
import { toHaveAttribute } from "@testing-library/jest-dom";

test("render a star", async () => {
    render(<Star />);
    expect(document.querySelector("svg")).toHaveAttribute("id","star");
});

test("renders an h1", () => {
    const { getByText } = render(<Star />);
    const h1 = getByText(/Great Star/);
    expect(h1).toHaveTextContent("Great Star");
})