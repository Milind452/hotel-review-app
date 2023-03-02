import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("The NavBar component should render", () => {
    const view = render(<NavBar />);
    expect(view).toMatchSnapshot();
});

test("The NavBar component should render with a title", () => {
    const title = "Test Application";
    render(<NavBar title={title} />);
    expect(screen.getByRole("heading")).toHaveTextContent(title);
});
