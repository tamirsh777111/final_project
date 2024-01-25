import { Fragment } from "react";

import styles from "./FirstComponent.module.css";
const FirstComponent = () => {
  let name = "john";
  return (
    <Fragment>
      <h1 style={{ color: "green", backgroundColor: "darkviolet" }}>Yey</h1>
      <h2 className={styles.h2}>the name is {name}</h2>
    </Fragment>
  );
};
export default FirstComponent;
