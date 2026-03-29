import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../About";

test("Should render Contact Component", () => {
    // 1. Render the component to the virtual DOM
    render(<About />);

    // 2. Querying
    const heading = screen.getByText("This is a About Page");

    // 3. Assertion
    expect(heading).toBeInTheDocument();
});