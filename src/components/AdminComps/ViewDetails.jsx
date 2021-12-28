import { useContext } from "react";
import { useNavigate } from "react-router";
import "../../styles/signin.css";
import { UserContext } from "../customHooks/UserContext";
import adminlogo from "../../images/adminlogo.png";
const ViewDetails = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  const userData = useContext(UserContext);
  return (
    <div className="mainHeader">
      <h1>Admin Details</h1>
      <div className="adminforms">
        <div className="card">
          <img width="60px" style={{ opacity: "0.8" }} src={adminlogo} alt="" />
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <h2>{userData.email}</h2>
          <h2>Role: {userData.role}</h2>
        </div>
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
