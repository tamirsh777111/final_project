import Grid from "@mui/material/Grid";
import AboutUsChild from "./AboutUsChild";
import car1 from "../assets/imgs/car1.jpg";
import car2 from "../assets/imgs/car2.jpg";
import car3 from "../assets/imgs/car3.jpg";
import car4 from "../assets/imgs/car4.jpg";

const AboutUsPage = () => {
  return (
    <Grid container spacing={1} rowSpacing={4}>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title1"
          subtitle="subtitle1"
          img={car1}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1000,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title2"
          subtitle="subtitle2"
          img={car2}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1001,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title3"
          subtitle="subtitle3"
          img={car3}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1002,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title4"
          subtitle="subtitle4"
          img={car4}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1003,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title1"
          subtitle="subtitle1"
          img={car1}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1004,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title2"
          subtitle="subtitle2"
          img={car2}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1005,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title3"
          subtitle="subtitle3"
          img={car3}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1006,
          }}
        />
      </Grid>
      <Grid item md={6} lg={3} sm={12} xs={12}>
        <AboutUsChild
          title="title4"
          subtitle="subtitle4"
          img={car4}
          body={{
            phone: "03-555-0000",
            address: "golda meir 10 Yavne",
            cardNumber: 1007,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AboutUsPage;

// import { Fragment } from "react";
// import Typography from "@mui/material/Typography";

// const AboutUsPage = () => {
//   return (
//     <Fragment>
//       <Typography variant="h1">About us - company name</Typography>
//       <Typography variant="h2">sub title</Typography>
//     </Fragment>
//   );
// };

// export default AboutUsPage;
