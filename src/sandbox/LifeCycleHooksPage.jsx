import { Fragment, useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import ComponentToKillComponent from "../sandbox/ComponentToKillComponent";

const LifeCycleHooksPage = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const [show, setShow] = useState(true);
  useEffect(() => {});
  useEffect(() => {}, []);
  useEffect(() => {}, [count]);
  const handleBtnClick = () => {
    setCount((currentCount) => currentCount + 1);
  };
  const handleToggleBtnClick = () => {
    setShow(!show);
  };
  return (
    <Fragment>
      <Button variant="contained" onClick={handleBtnClick}>
        +1
      </Button>
      <Typography>LifeCycleHooksPage, count: {count}</Typography>
      <Button variant="contained" onClick={handleToggleBtnClick}>
        toggle
      </Button>
      {show && <ComponentToKillComponent />}
    </Fragment>
  );
};

export default LifeCycleHooksPage;
