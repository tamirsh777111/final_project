import { Fragment } from 'react';
import axios from 'axios';
import ROUTES from '../../routes/ROUTES';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FavoritesBox from './boxes/FavoritesBox';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleDeleteCard = id => {};
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
    <Fragment>
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: 'secondary.main',
          }}
        >
          <FavoriteIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Favorites Cards{' '}
        </Typography>
      </Box>
      <FavoritesBox handleDeleteCard={handleDeleteCard} handleEditCard={handleEditCard} handleCallCard={handleCallCard} handleFavoriteCard={handleFavoriteCard} />{' '}
    </Fragment>
  );
};

export default ProfilePage;
