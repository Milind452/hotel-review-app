import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("The NavBar should render", () => {
    const view = render(<NavBar />);
    expect(view).toMatchSnapshot();
});

test("The NavBar should render with a title", () => {
    const view = render(<NavBar title="Test Application" />);
    expect(view).toMatchSnapshot();
});
