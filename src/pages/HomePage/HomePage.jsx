import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import ROUTES from "../../routes/ROUTES";
import { useEffect, useState } from "react";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";

// let initialDataFromServer = [
//   {
//     id: "1",
//     title: "title1",
//     subtitle: "subtitle1",
//     body: "body1",
//     img: "/assets/imgs/car1.jpg",
//   },
//   {
//     id: "2",
//     title: "title2",
//     subtitle: "subtitle2",
//     body: "body2",
//     img: "/assets/imgs/car2.jpg",
//   },
//   {
//     id: "3",
//     title: "title3",
//     subtitle: "subtitle3",
//     body: "body3",
//     img: "/assets/imgs/car3.jpg",
//   },
//   {
//     id: "4",
//     title: "title4",
//     subtitle: "subtitle4",
//     body: "body4",
//     img: "/assets/imgs/car4.jpg",
//   },
//   {
//     id: "5",
//     title: "title1",
//     subtitle: "subtitle1",
//     body: "body1",
//     img: "/assets/imgs/car1.jpg",
//   },
//   {
//     id: "6",
//     title: "title2",
//     subtitle: "subtitle2",
//     body: "body2",
//     img: "/assets/imgs/car2.jpg",
//   },
//   {
//     id: "7",
//     title: "title3",
//     subtitle: "subtitle3",
//     body: "body3",
//     img: "/assets/imgs/car3.jpg",
//   },
//   {
//     id: "8",
//     title: "title4",
//     subtitle: "subtitle4",
//     body: "body4",
//     img: "/assets/imgs/car4.jpg",
//   },
// ];

// const initialDataFromServer = [];

// https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards

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
