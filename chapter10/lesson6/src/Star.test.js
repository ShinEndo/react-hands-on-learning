import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star";
import {render} from '@testing-library/react'
import { toHaveAttribute } from "@testing-library/jest-dom";

test("render a star", async () => {
    render(<Star />);
    expect(document.querySelector("svg")).toBeTruthy();
});