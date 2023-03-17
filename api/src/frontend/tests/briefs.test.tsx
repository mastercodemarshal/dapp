import { render, screen } from "@testing-library/react";
import React from "react";
import { NewBrief } from "../pages/briefs/new";

test("test  NewBrief rendering", () => {
    const briefComponent = render(<NewBrief />);
    expect(briefComponent).toBeTruthy();
});


test("test NewBrief rendering and matching the snapshot", () => {
    render(<NewBrief />);
    expect(screen.getByText('Write a headline for your brief')).toMatchSnapshot();
});