import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import TextInputComponent from "../../components/TextInputComponent";
import validateSchema from "../../validation/cardValidation";
import LoginContext from "../../store/loginContext";
import { toast } from "react-toastify";
import normalizeEdit from "./normalizeEdit";

const EditCardPage = () => {
  const [inputsValue, setInputsValue] = useState({
    name: "",
    title: "",
    subtitle: "",
    _id: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    subitle: "",
    description: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
  });
  let { id } = useParams();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    if (!id || !login) {
      return;
    }
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
        if (data.user_id === login._id || login.isAdmin) {
        } else {
        }
        setInputsValue(normalizeEdit(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, login]);
  let keysArray = Object.keys(inputsValue);

  const handleInputsChange = (e) => {
    setInputsValue((cInputsValue) => ({
      ...cInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInputsBlur = (e) => {
    const { error } = validateSchema[e.target.id]({
      [e.target.id]: inputsValue[e.target.id],
    });
    console.log({ error });
    if (error) {
      setErrors((cErrors) => ({
        ...cErrors,
        [e.target.id]: error.details[0].message,
      }));
    } else {
      setErrors((cErrors) => {
        delete cErrors[e.target.id];
        return { ...cErrors };
      });
    }
  };

  const handleInputsSubmit = () => {
    if (!errors) {
      toast.info("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    axios
      .put("/cards/" + id, normalizeEdit(inputsValue))
      .then(({ data }) => {
        setInputsValue(normalizeEdit(data));
      })
      .catch((err) => {});
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit your card
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {keysArray.map((keyName) => (
            <TextInputComponent
              key={"inputs" + keyName}
              id={keyName}
              label={keyName}
              value={inputsValue[keyName]}
              onChange={handleInputsChange}
              onBlur={handleInputsBlur}
              errors={errors[keyName]}
            />
          ))}
        </Grid>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleInputsSubmit}
      >
        Edit card
      </Button>
    </Box>
  );
};
export default EditCardPage;
