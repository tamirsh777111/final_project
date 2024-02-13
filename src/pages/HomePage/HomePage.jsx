import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardComponent from '../../components/CardComponent';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ROUTES from '../../routes/ROUTES';
import { FilterContext } from '../../store/filterContext';

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const { filterInput } = useContext(FilterContext);

  useEffect(() => {
    axios
      .get('/cards')
      .then(({ data }) => {
        setDataFromServer(data);
      })
      .catch(err => {});
  }, []);

  if (!dataFromServer || !dataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }

  const handleDeleteCard = id => {
    axios
      .delete('/cards/' + id)
      .then(data => {})
      .catch(Error);
    setDataFromServer(currentDataFromServer => currentDataFromServer.filter(card => card._id !== id));
  };
  const handleEditCard = id => {
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };

  const handleCallCard = id => {
    navigate(ROUTES.ABOUT);
  };
  const handleFavoriteCard = id => {
    axios
      .patch(`/cards/${id}`)
      .then(({ data }) => {})
      .catch(err => {});
  };

  return (
    <Grid container spacing={2}>
      {dataFromServer
        .filter(item => item.title.includes(filterInput))
        .map((item, index) => (
          <Grid item lg={3} md={6} xs={12} key={'carsCard' + index}>
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
              likes={item.likes}
            />{' '}
          </Grid>
        ))}
    </Grid>
  );
};

export default HomePage;
