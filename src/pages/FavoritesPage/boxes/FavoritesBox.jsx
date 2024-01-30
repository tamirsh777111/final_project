import { Fragment } from 'react';
import CardComponent from '../../../components/CardComponent';
import Grid from '@mui/material/Grid';
import { useState, useContext } from 'react';
import { FilterContext } from '../../../store/filterContext';
import { useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const FavoritesBox = ({ handleDeleteCard, handleEditCard, handleCallCard, handleFavoriteCard }) => {
  const [cards, setCards] = useState([]);
  const { filterInput } = useContext(FilterContext);
  let token = localStorage.getItem('token');
  let { _id } = jwtDecode(token);

  useEffect(() => {
    axios
      .get('/cards/')
      .then(({ data }) => {
        setCards(
          data.filter(card => {
            if (card.likes.includes(_id)) {
              return true;
            }
            return false;
          })
        );
      })
      .catch(err => {});
  }, []);
  return (
    <Fragment>
      <Grid container spacing={2}>
        {cards
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
                likes={item.likes}
                onEdit={handleEditCard}
                onCall={handleCallCard}
                onFavorite={handleFavoriteCard}
              />{' '}
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default FavoritesBox;
