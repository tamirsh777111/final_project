import { Fragment } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  validateEmailLogin,
  validatePasswordLogin,
  validateFirstSchema,
  validateSchema,
} from "../../validation/registerValidation";
import Alert from "@mui/material/Alert";

const RegisterPageBoxCountry = () => {
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

  const handleInputsChange = (e) => {
    setInputsValue((CopyOfCurrentValue) => ({
      ...CopyOfCurrentValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInputsBlur = (e) => {
    let dataFromJoi = validateSchema[e.target.id]({
      [e.target.id]: inputsValue[e.target.id],
    });

    if (dataFromJoi.error) {
      setErrors((copyOfErrors) => ({
        ...copyOfErrors,
        [e.target.id]: dataFromJoi.error.details[0].message,
      }));
    } else {
      setErrors((copyOfErrors) => {
        delete copyOfErrors[e.target.id];
        return { ...copyOfErrors };
      });
    }
  };
  return (
    <Fragment>
      <TextField
        required
        fullWidth
        name="country"
        label="Country"
        id="country"
        autoComplete="new-country"
        value={inputsValue.country}
        onChange={handleInputsChange}
        onBlur={handleInputsBlur}
      />
      {errors.country && <Alert severity="error">{errors.country}</Alert>}
    </Fragment>
  );
};

export default RegisterPageBoxCountry;