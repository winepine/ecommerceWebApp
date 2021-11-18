import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
/*
{
  cnic: "1234",
  email: "shafaqnawaz784@gmail.com",
}
*/
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
const Temp = () => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const SubmitSignin = async () => {
    console.log(cnic, email);
    const resposne = await fetch("/api/signin/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        cnic: cnic,
        email: email,
      }),
    });
    const achaResponse = await resposne.json();
    navigate("/postSignin");
    try {
      if (achaResponse.cnic && achaResponse.email) {
        navigate("/postSignin");
      }
    } catch (x) {}
    console.log(achaResponse);
  };
  const classes = useStyles();
  return (
    <div>
      <div className="mContainer">
        <h1>Ecommerce Signin</h1>
        <hr color="gray" />
        <div className="inputFields">
          <TextField
            className={classes.up}
            value={cnic}
            onChange={(s) => {
              setCnic(s.target.value);
            }}
            id="outlined-basic"
            label="cnic"
            variant="outlined"
          />
          <br />
          <TextField
            className={classes.root}
            value={email}
            onChange={(s) => {
              setEmail(s.target.value);
            }}
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="password"
            margin="dense"
          />
        </div>
        <div className="signButtons">
          <Button className={classes.root} onClick={SubmitSignin}>
            Sign In
          </Button>
          <Link to="/signup">
            <Button className={classes.root}>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Temp;
