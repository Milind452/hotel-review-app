import { HotelsContextProvider } from "./HotelsContext";

const AppContext = ({ children }) => {
    return <HotelsContextProvider>{children}</HotelsContextProvider>;
};

export default AppContext;
