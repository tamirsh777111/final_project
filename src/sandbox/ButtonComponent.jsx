import Button from "@mui/material/Button";

/**
 * callbackFunction starts with handle
 * onClick with Big C
 * when calling the function in the html part, dont add ()
 */

const ButtonComponent = ({ color, children }) => {
  const handleBtnClick = () => {};
  return (
    <Button variant="contained" color={color} onClick={handleBtnClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
