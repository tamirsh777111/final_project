import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";

const CardComponent = ({
  title,
  subtitle,
  img,
  phone,
  address,
  cardNumber,
  id,
  onDelete,
  onEdit,
  onCall,
  onFavorite,
}) => {
  const handleDelteClick = () => {
    console.log("click in delete", id);
    onDelete(id);
  };
  const navigate = useNavigate();

  const handleEditClick = () => {
    console.log("click in edit", id);

    onEdit(id);
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };
  const handleCallClick = () => {
    console.log("click in call", id);
    onCall(id);
  };
  const handleFavoriteClick = () => {
    console.log("click in Favorite", id);
    onFavorite(id);
  };

  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="american massle car"
          height={200}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:{" "}
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:{" "}
          </Typography>
          {`city - ${address.city}
           | street - ${address.street} 
           | house number - ${address.houseNumber}  | zip -  
          ${address.zip}`}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:{" "}
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton onClick={handleDelteClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <ModeIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={handleCallClick}>
              <LocalPhoneIcon />
            </IconButton>
            <IconButton onClick={handleFavoriteClick}>
              <FavoriteIcon color={onFavorite ? "error" : "inherit"} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  cardNumber: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

CardComponent.defaultProps = {
  img: "/assets/imgs/car1.jpg",
  subtitle: "subtitle default",
};

export default CardComponent;
