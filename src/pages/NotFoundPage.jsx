import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DangerousIcon from "@mui/icons-material/Dangerous";
import IconButton from "@mui/material/IconButton";

const NotFoundPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 20,
      }}
    >
      <Grid item lg={3} md={6} xs={12}></Grid>
      <Typography variant="h1">404 Not Found</Typography>
      <Grid item lg={3} md={6} xs={12}>
        <IconButton>
          <DangerousIcon sx={{ fontSize: 200, color: "#1976D2" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
