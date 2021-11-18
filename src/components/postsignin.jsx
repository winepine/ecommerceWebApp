import { dialogContentTextClasses } from "@mui/material";
import React from "react";

export default class postSignin extends React.Component {
  state = {
    usersData: [],
  };
  async componentDidMount() {
    const req = await fetch("/api/");
    const response = await req.json();
    this.setState({
      usersData: response,
    });
  }
  render() {

    return <div>
        <h1>LOGIN SUCCESSFUL</h1>
        {JSON.stringify(this.state.usersData)}</div>;
  }
}
