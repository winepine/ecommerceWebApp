import { useEffect } from "react";
import { useNavigate } from "react-router";
import "../../styles/signin.css";
const ViewDetails = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  return (
    <div className="mainHeader">
      <h1>Admin Details</h1>
      <div className="adminforms">
        <h2>FirstName: {props.adminDetails.firstName}</h2>
        <h2>LastName: {props.adminDetails.lastName}</h2>
        <h2>Email: {props.adminDetails.email}</h2>
        <h2>Role: {props.adminDetails.role}</h2>
        <input
          type="password"
          className="adminField"
          placeholder="Update Password"
        />
        <input
          type="password"
          className="adminField"
          placeholder="Confirm Password"
        />
        <button className="adminField">Update Password</button>
        <button onClick={logout} className="adminField">
          Logout
        </button>
      </div>
    </div>
  );
};
export default ViewDetails;
