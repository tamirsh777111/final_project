import ROUTES from '../routes/ROUTES';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Typography, CardActionArea, CardMedia, Divider, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

const CardComponent = ({ title, likes, subtitle, img, phone, address, cardNumber, id, onDelete, onEdit, onCall, onFavorite }) => {
  let token = localStorage.getItem('token');
  let { _id } = token ? jwtDecode(token) : '';
  const [isLiked, setIsLiked] = useState(likes.some(like => like === _id));

  const handleDelteClick = () => {
    onDelete(id);
  };
  const navigate = useNavigate();

  const handleEditClick = () => {
    onEdit(id);
    navigate(`${ROUTES.EDITCARD}/${id}`);
  };
  const handleCallClick = () => {
    onCall(id);
  };
  const handleFavoriteClick = () => {
    onFavorite(id);
    setIsLiked(prev => !prev);
  };

  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="american massle car" height={200} />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone of the car owner:{' '}
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            The location of the car:{' '}
          </Typography>
          {`city - ${address.city}
           | street - ${address.street} 
           | house number - ${address.houseNumber}  | zip -  
          ${address.zip}`}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Car number:{' '}
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
              <FavoriteIcon color={isLiked ? 'error' : 'inherit'} />
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
  img: '/assets/imgs/car1.jpg',
  subtitle: 'subtitle default',
};

export default CardComponent;
