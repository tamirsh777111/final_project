import ROUTES from '../routes/ROUTES';

const alwaysLinks = [
  { to: ROUTES.HOME, children: 'Home' },
  { to: ROUTES.ABOUT, children: 'About Us' },
];
const loggedInLinks = [{ to: '/favorites', children: 'Favorites cars' }];

const bizLinks = [{ to: ROUTES.CREATECARD, children: 'Create card of a car' }];

const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: 'Sign up' },
  { to: ROUTES.LOGIN, children: 'Login' },
];

export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks };
