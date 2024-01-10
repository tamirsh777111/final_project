import Grid from "@mui/material/Grid";

const NotFoundPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        style={{ width: "700px", height: "700px", border: 0 }}
        src="https://lottie.host/embed/ede461b6-cfdd-4dc5-bbda-f1371695166a/aoMWPcrUJl.json"
      ></iframe>
    </Grid>
  );
};

export default NotFoundPage;
