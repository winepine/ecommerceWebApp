import React from "react";
import "../styles/signin.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    color: "black",
    margin: "12px 1rem 0 37vw",
    width: "25vw",
  },
  up: {
    color: "black",
    margin: "5rem 1rem 0 37vw",
    width: "25vw",
  },
});
const SignUp = () => {
  const [inputData, setData] = useState({
    firstName: "",
    lastName: "",
    cnic: "",
    email: "",
    gender: "Helicopter",
    password: "",
    phone: "",
    role: "Seller",
  });
  const submitFunction = async () => {
    const resposne = await fetch("/api/signup", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(inputData),
    });
    const res = await resposne.json();
    console.log(res);

    // const response = await fetch("http://192.168.18.78:4000/api/signup/", {
    //   method: "POST",
    //   header: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: inputData,
    // });
    // const res = await response.json();
    // console.log(res);
  };
  const classes = useStyles();
  const handleFormChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    setData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="mContainer">
      <div>
        <h1>Ecommerce SignUp</h1>
        <hr color="gray" />
      </div>
      <div>
        <div>
          <TextField
            className={classes.up}
            value={inputData.firstName}
            name="firstName"
            onChange={handleFormChange}
            variant="outlined"
            label="First Name"
          ></TextField>
          <br />
          <TextField
            className={classes.root}
            value={inputData.lastName}
            name="lastName"
            onChange={handleFormChange}
            variant="outlined"
            label="Last Name"
          ></TextField>
          <br />
          <TextField
            className={classes.root}
            value={inputData.email}
            name="email"
            onChange={handleFormChange}
            variant="outlined"
            label="Email"
          ></TextField>
          <br />
          <TextField
            className={classes.root}
            value={inputData.cnic}
            name="cnic"
            onChange={handleFormChange}
            variant="outlined"
            label="CNIC"
          ></TextField>
          <br />
          <TextField
            className={classes.root}
            value={inputData.phone}
            name="phone"
            onChange={handleFormChange}
            variant="outlined"
            label="Phone"
          ></TextField>
          <br />
          <FormControl>
            <InputLabel className={classes.root} id="roleType">
              Role
            </InputLabel>
            <Select
              name="role"
              className={classes.root}
              labelId="roleType"
              label="Age"
              value={inputData.role}
              onChange={handleFormChange}
            >
              <MenuItem value="Seller">User</MenuItem>
              <MenuItem value="Buyer">Admin</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            className={classes.root}
            value={inputData.password}
            name="password"
            onChange={handleFormChange}
            variant="outlined"
            label="Password"
            type="password"
          ></TextField>
          <br />
          <Link to="/">
            <Button className={classes.root}>Back To SignIn</Button>
            <br />
          </Link>
          <Button className={classes.root} onClick={submitFunction}>
            Register
          </Button>
          <br />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
