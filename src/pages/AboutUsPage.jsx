import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import styles from '../pages/AboutPageComponent.module.css';
import Box from '@mui/material/Box';

const AboutUsPage = () => {
  return (
    <Fragment>
      <Box className={styles.body}>
        <Grid
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item lg={3} md={10} xs={12} sx={{ textAlign: 'right', marginRight: '20px' }}>
            <Typography variant="h1">How To Use The Car Website</Typography>
          </Grid>
          <Grid item lg={3} md={2} xs={12}>
            <iframe style={{ width: '300px', height: '300px', border: 0 }} src="https://lottie.host/embed/443d940f-1f1c-4300-bea6-cf9a9cee980b/OZQ5nJyGyW.json"></iframe>
          </Grid>
        </Grid>
        <h1 className={styles.h1}>
          <code>:: Steps </code>
        </h1>

        <p className={styles.p}>First of all, go to the registration page if you are not registered in the system, if you have an account that includes a username and password, please go to the login page and enter the required details.</p>

        <blockquote className={styles.blockquote}>
          <p className={styles.p}>After that you can view the site cars and edit them or mark as a favorite of your choice.</p>
        </blockquote>

        <p className={styles.p}>If you like the car, you can contact us using one of the contact methods in the lower bar below, good luck and we will be happy to hear from you.</p>
      </Box>
    </Fragment>
  );
};

export default AboutUsPage;
