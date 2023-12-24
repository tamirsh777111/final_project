import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";

const initialDataFromServer = [
  {
    id: "1",
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: "/assets/imgs/car1.jpg",
  },
  {
    id: "2",
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: "/assets/imgs/car2.jpg",
  },
  {
    id: "3",
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: "/assets/imgs/car3.jpg",
  },
  {
    id: "4",
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: "/assets/imgs/car4.jpg",
  },
  {
    id: "5",
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: "/assets/imgs/car1.jpg",
  },
  {
    id: "6",
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: "/assets/imgs/car2.jpg",
  },
  {
    id: "7",
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: "/assets/imgs/car3.jpg",
  },
  {
    id: "8",
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: "/assets/imgs/car4.jpg",
  },
];

// const initialDataFromServer = [];

const handleDeleteCard = (id) => {
  console.log("father: card to delete", id);
};
const handleEditCard = (id) => {
  console.log("father: card to edit", id);
};
const handleCallCard = (id) => {
  console.log("father: card to edit", id);
};
const handleFavoriteCard = (id) => {
  console.log("father: card to Favorite", id);
};

const HomePage = () => {
  if (!initialDataFromServer || !initialDataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {initialDataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            phone="0500000000"
            address={{
              city: "South park",
              street: "Hogwards",
              houseNumber: 123,
              zipCode: 12345,
            }}
            cardNumber={12345}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onCall={handleCallCard}
            onFavorite={handleFavoriteCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
