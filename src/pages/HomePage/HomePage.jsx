import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        console.log(data);
        setDataFromServer(data);
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);

  if (!dataFromServer || !dataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }

  const handleDeleteCard = (id) => {
    console.log("father: card to delete", id);
    setDataFromServer((currentDataFromServer) =>
      currentDataFromServer.filter((card) => card.id !== id)
    );
    console.log({ dataFromServer });
  };
  const handleEditCard = (id) => {
    console.log("father: card to edit", id);
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  const handleCallCard = (id) => {
    console.log("father: card to edit", id);
  };
  const handleFavoriteCard = (id) => {
    console.log("father: card to Favorite", id);
  };

  return (
    <Grid container spacing={2}>
      {dataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          {/* <Link to={`${ROUTES.EDITCARD}/${item.id}`}> */}
          <CardComponent
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            // city:${item.address.city},
            // street: "Hogwards",
            // houseNumber: 123,
            // zip: 12345,
            cardNumber={item.bizNumber}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onCall={handleCallCard}
            onFavorite={handleFavoriteCard}
          />{" "}
          {/* </Link> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
