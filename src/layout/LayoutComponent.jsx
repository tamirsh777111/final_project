import { useState } from "react";
// import LoginPage from "../pages/LoginPage/LoginPage";
// import RegisterPage from "../pages/RegisterPage/RegisterPage";
import FooterComponent from "./footer/FooterComponent";
import HeaderComponent from "./header/HeaderComponent";
import MainComponent from "./main/MainComponent";
// import HomePage from "../pages/HomePage/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import tmc from "twin-moon-color";
import CssBaseline from "@mui/material/CssBaseline";

const LayoutComponent = ({ children }) => {
  const themes = tmc({
    "text.headerColorColor": "!gray",
    "text.headerActive": "*white",
    favActice: "*#FB0000",
  });
  const [isDarkTheme, setDarkTheme] = useState(false);
  const darkMode = createTheme(themes.dark);
  const lightMode = createTheme(themes.light);

  const handleThemeChange = (cheked) => {
    setDarkTheme(cheked);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <CssBaseline />
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        onThemeChange={handleThemeChange}
      />
      {/* <LoginPage />
      <RegisterPage /> */}
      <MainComponent>{children} </MainComponent>
      <FooterComponent />
    </ThemeProvider>
  );
};
export default LayoutComponent;
