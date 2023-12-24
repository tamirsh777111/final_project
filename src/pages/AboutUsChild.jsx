import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  Container,
  CardMedia,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import car1 from "../assets/imgs/car1.jpg";

import ModeIcon from "@mui/icons-material/Mode";

import DeleteIcon from "@mui/icons-material/Delete";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

import FavoriteIcon from "@mui/icons-material/Favorite";

import PropTypes from "prop-types";

const AboutUsChild = ({ title, subtitle, img, body }) => {
  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Card square raised>
        <CardActionArea>
          <CardMedia
            component="img"
            image={img}
            alt="american massle car"
            height={200}
          />
          <CardHeader title={title} subheader={subtitle}></CardHeader>
          <Divider></Divider>
          <CardContent>
            <Typography>
              <Typography component="span" fontWeight={700}>
                phone:{" "}
              </Typography>
              {body.phone}
            </Typography>
            <Typography>
              <Typography component="span" fontWeight={700}>
                address:{" "}
              </Typography>
              {body.address}
            </Typography>
            <Typography>
              <Typography component="span" fontWeight={700}>
                card number:{" "}
              </Typography>
              {body.cardNumber}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid container>
          <Grid item md={6} textAlign="left">
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <ModeIcon />
            </IconButton>
          </Grid>
          <Grid item md={6} textAlign="right">
            <IconButton>
              <PhoneEnabledIcon />
            </IconButton>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

AboutUsChild.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string.isRequired,
  body: PropTypes.shape({
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    cardNumber: PropTypes.number.isRequired,
  }).isRequired,
};

AboutUsChild.defaultProps = {
  img: car1,
};
export default AboutUsChild;
