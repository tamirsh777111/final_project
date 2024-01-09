import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Fragment } from "react";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import styles from "../pages/AboutPageComponent.module.css";
import Box from "@mui/material/Box";

const AboutUsPage = () => {
  return (
    <Fragment>
      <Box className={styles.body}>
        <Grid
          // container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 20,
          }}
        >
          <Grid item lg={3} md={10} xs={12} sx={{ textAlign: "right" }}>
            <Typography variant="h1">Hello And How To Use</Typography>
          </Grid>
          <Grid item lg={3} md={2} xs={12}>
            <IconButton>
              <WavingHandIcon sx={{ fontSize: 200, color: "#1976D2" }} />
            </IconButton>
          </Grid>
        </Grid>
        <h1 className={styles.h1}>
          <code>:: Steps </code>
        </h1>

        <p className={styles.p}>
          First of all, go to the registration page if you are not registered in
          the system, if you have an account that includes a username and
          password, please go to the login page and enter the required details.
        </p>

        <blockquote className={styles.blockquote}>
          <p className={styles.p}>
            After that you can view the site cards and edit them or mark as a
            favorite of your choice.
          </p>
        </blockquote>

        <p className={styles.p}>
          If you like the system, you can contact us using one of the contact
          methods in the lower bar below, good luck and we will be happy to hear
          from you.
        </p>
      </Box>
    </Fragment>
  );
};

export default AboutUsPage;
