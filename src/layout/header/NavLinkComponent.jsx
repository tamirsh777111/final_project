import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
  // const isActive = false;
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Typography
          // color={isActive ? "text.headerActive" : "text.headerColor"}
          color={isActive ? "white" : "#c1c1c1"}
          sx={{ p: 2 }}
          variant="h6"
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};
{
  /* <Link to={to}>
      <Typography color="text.primary" sx={{ p: 2 }}>
        {children}
      </Typography>
    </Link> */
}
export default NavLinkComponent;
