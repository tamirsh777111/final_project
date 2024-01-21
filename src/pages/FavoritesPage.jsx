import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Grid from "@mui/material/Grid";
import CardComponent from "../components/CardComponent";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { FilterContext } from "../store/filterContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  let token = localStorage.getItem("token");
  let { _id } = jwtDecode(token);
  const { filterInput } = useContext(FilterContext);

  const handleDeleteCard = (id) => {
    console.log("father: card to delete", id);
  };
  const handleEditCard = (id) => {
    console.log("father: card to edit", id);
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  const handleCallCard = (id) => {
    navigate(ROUTES.ABOUT);
  };
  const handleFavoriteCard = (id) => {
    axios
      .patch(`/cards/${id}`)
      .then(({ data }) => {})
      .catch((err) => {
        console.log("error from axios", err);
      });
  };

  useEffect(() => {
    axios
      .get("/cards/")
      .then(({ data }) => {
        setCards(
          data.filter((card) => {
            if (card.likes.includes(_id)) {
              return true;
            }
            return false;
          })
        );
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);
  return (
    <Fragment>
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
          }}
        >
          <FavoriteIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Favorites Cards{" "}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {cards
          .filter((item) => item.title.includes(filterInput))
          .map((item, index) => (
            <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
              <CardComponent
                id={item._id}
                title={item.title}
                subtitle={item.subtitle}
                img={item.image.url}
                phone={item.phone}
                address={item.address}
                cardNumber={item.bizNumber}
                onDelete={handleDeleteCard}
                onEdit={handleEditCard}
                onCall={handleCallCard}
                onFavorite={handleFavoriteCard}
              />{" "}
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default ProfilePage;
