import { Fragment, useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";

const LifeCycleHooksPage = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });
  useEffect(() => {});
  useEffect(() => {}, []);
  useEffect(() => {}, [count]);
  const handleBtnClick = () => {
    setCount((currentCount) => currentCount + 1);
  };
  return (
    <Fragment>
      <Button variant="contained" onClick={handleBtnClick}>
        +1
      </Button>
      <Typography>LifeCycleHooksPage, count: {count}</Typography>
    </Fragment>
  );
};

export default LifeCycleHooksPage;
