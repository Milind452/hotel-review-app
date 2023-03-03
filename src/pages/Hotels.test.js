import { render, screen } from "@testing-library/react";
import Hotels from "./Hotels";
import HotelsContext from "../context/HotelsContext";

test("The Hotels component should render", async () => {
    const wrapper = ({ children }) => (
        <HotelsContext.Provider
            value={{
                loading: true,
                error: "",
                hotels: [],
                fetchHotels: jest.fn(),
            }}
        >
            {children}
        </HotelsContext.Provider>
    );
    render(<Hotels />, { wrapper });
    expect(await screen.findByText("Loading...")).toBeVisible();
});
