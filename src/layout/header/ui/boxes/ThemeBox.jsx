import { Switch } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ThemeBox = ({ isDarkTheme, handleThemeChange }) => {
  return (
    <Box
      sx={{
        my: 2,
        p: 1,
      }}
    >
      <Typography sx={{ display: { xs: "none", md: "inline" } }}>
        {isDarkTheme ? "Dark" : "Light"} Mode
      </Typography>
      <Switch checked={isDarkTheme} onChange={handleThemeChange} />
    </Box>
  );
};

export default ThemeBox;
