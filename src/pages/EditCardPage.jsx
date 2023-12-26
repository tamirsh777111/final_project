import { useParams } from "react-router-dom";

import { Fragment } from "react";

const EditCardPage = () => {
  let { id } = useParams();

  return (
    <Fragment>
      <h1>Edit Card Page {id}</h1>
    </Fragment>
  );
};

export default EditCardPage;
