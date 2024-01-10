import ROUTES from "../routes/ROUTES";

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
];
const loggedInLinks = [{ to: "/favorites", children: "Favorites page" }];

const bizLinks = [{ to: ROUTES.CREATECARD, children: "Create card" }];

const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Sign up" },
  { to: ROUTES.LOGIN, children: "Login" },
];

export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks };
