import LayoutComponent from "./layout/LayoutComponent";
import { useState } from "react";
import Router from "./routes/Router";
import LoginContext from "./store/loginContext";
import { ToastContainer } from "react-toastify";
import FilterProvider from "./store/filterContext";

function App() {
  const [login, setLogin] = useState(null);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <FilterProvider>
        <ToastContainer />
        <LayoutComponent>
          <Router />
        </LayoutComponent>
      </FilterProvider>
    </LoginContext.Provider>
  );
}

export default App;
