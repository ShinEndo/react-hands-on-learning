import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star";

test("render a star", () => {
    const div = document.createElement("div");
    const root = ReactDOM.createRoot(div);
    root.render(<Star />,div);
    expect(div.querySelector("svg")).toBeTruthy();
});