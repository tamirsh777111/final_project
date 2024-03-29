import { useState } from 'react';
import FooterComponent from './footer/FooterComponent';
import HeaderComponent from './header/HeaderComponent';
import MainComponent from './main/MainComponent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import tmc from 'twin-moon-color';
import CssBaseline from '@mui/material/CssBaseline';
import UseAutoLogin from '../hooks/UseAutoLogin';
import Typography from '@mui/material/Typography';

const LayoutComponent = ({ children }) => {
  const finishAutoLogin = UseAutoLogin();

  const themes = tmc({
    'text.headerColorColor': '!gray',
    'text.headerActive': '*white',
    favActice: '*#FB0000',
    primary: '!#1B1F32',
  });
  const [isDarkTheme, setDarkTheme] = useState(false);
  const darkMode = createTheme(themes.dark);
  const lightMode = createTheme(themes.light);

  const handleThemeChange = cheked => {
    setDarkTheme(cheked);
  };

  if (!finishAutoLogin) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <CssBaseline />
      <HeaderComponent isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} />
      <MainComponent>{finishAutoLogin ? children : <Typography variant="h1">Loading...</Typography>}</MainComponent>
      <FooterComponent />
    </ThemeProvider>
  );
};
export default LayoutComponent;
