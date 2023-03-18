import { Freelancers } from "../pages/freelancer/new";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";

function setUp() {
    const user = {
        "id": 1,
        "username": "test",
        "display_name": "test",
        "password": "test",
        "web3Accounts": [],
        "getstream_token": "test",
    };
    render(<Freelancers user={user} />);
}

test("test Freelancer rendering", () => {
    setUp();
    expect(render(<Freelancers user={{
        "id": 1,
        "username": "test",
        "display_name": "test",
        "password": "test",
        "web3Accounts": [],
        "getstream_token": "test",
    }} />)).toBeTruthy();
});

test("test Freelancer rendering and matching the snapshot", () => {
    setUp();
    expect(screen.getByText('Get Started!')).toMatchSnapshot();
});

test("test freelancer onclick next snapshot matching", () => {
    setUp();
    expect(screen.getByText('Get Started!')).toMatchSnapshot();
    fireEvent.click(screen.getByTestId('get-started-button'));
    expect(screen.getByText('A few quick questions: have you freelanced before?')).toMatchSnapshot();
});

test("test freelancer capturing the input textbox value", () => {
    setUp();
    fireEvent.click(screen.getByTestId('get-started-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.change(screen.getByTestId('title'), {target: {value: 'imbueLegends'}})
    expect((screen.getByTestId('title') as HTMLInputElement).value).toEqual('imbueLegends');
});

test("test freelancer capturing the multiselect languages", () => {
    setUp();
    fireEvent.click(screen.getByTestId('get-started-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.change(screen.getByTestId('tag-input'), {target: {value: ['German','hkh']}})
    expect((screen.getByTestId('tag-input') as HTMLInputElement).value).toEqual('German,hkh');
});

test("test freelancer the bio length ", () => {
    setUp();
    fireEvent.click(screen.getByTestId('get-started-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.click(screen.getByTestId('next-button'));
    fireEvent.change(screen.getByTestId('bio'), {target: {value: "this is my bio" }})
    expect((screen.getByTestId('bio') as HTMLInputElement).value.length).toEqual(14);
});