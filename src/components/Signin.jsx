import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
/*
{
  cnic: "1234",
  email: "shafaqnawaz784@gmail.com",
}
*/
const useStyles = makeStyles({
  root: {
    color: "black",
    marginLeft: "10vh",
    width: "25vw",
  },
});

//-----
const Signin = ({ setShow }) => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Submit Signin Function
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
  //-----
  const classes = useStyles();

  //- -----
  return (
    <div className="mContainer">
      <div className="float-child">
        <div className="white">
          <h1>Signin</h1>
          <div className="inputFields">
            <TextField
              className={classes.root}
              value={cnic}
              onChange={(s) => {
                setCnic(s.target.value);
              }}
              id="outlined-basic"
              label="Email"
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
              label="Password"
              variant="outlined"
              type="password"
              margin="dense"
            />
          </div>
          <div className="signButtons">
            <button className="si" onClick={SubmitSignin}>
              Sign In
            </button>
            <button onClick={setShow} className="su">
              Register
            </button>
          </div>
          <div className="footer">
            <p>All Copyrights Not Reserved ofcourse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
