import CatNav from "./CatNav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PostUserPage = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({});
  useEffect(() => {
    let token = localStorage.getItem("ecomtoken");
    if (!token) navigate("/");
    async function fetchData() {
      try {
        const result = await fetch(
          "/api/homepage/?authorization=bearer " + token
        );
        const user = await result.json();
        setUserdata(user);
        if (user.role === "admin") {
          navigate("/postSignin");
        }
      } catch (x) {
        localStorage.removeItem("ecomtoken");
        navigate("/");
      }
    }
    fetchData();
    document.title = "FYWEB Home";
  }, []);
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  return (
    <div>
      <CatNav />
      <button onClick={logout} style={{ border: "black 1px solid" }}>
        Logout
      </button>
    </div>
  );
};
export default PostUserPage;
