import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Grid from "@mui/material/Grid";
import CardComponent from "../components/CardComponent";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  let token = localStorage.getItem("token");
  let { _id } = jwtDecode(token);

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
      .get("/cards")
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
      <h1>Fav</h1>

      <Grid container spacing={2}>
        {cards.map((item, index) => (
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
