import ROUTES from "../routes/ROUTES";

// const myLinks = [
//   { to: ROUTES.HOME, children: "Home page" },
//   { to: ROUTES.ABOUT, children: "About Us page" },
//   { to: ROUTES.REGISTER, children: "Register page" },
//   { to: ROUTES.LOGIN, children: "Login page" },
// ];

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
];
const loggedInLinks = [{ to: "/profile", children: "Profile page" }];

const bizLinks = [{ to: ROUTES.CREATECARD, children: "Create card" }];

const loggedOutLinks = [
  { to: ROUTES.REGISTER, children: "Sign up" },
  { to: ROUTES.LOGIN, children: "Login" },
];

// export default myLinks;
export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks };
