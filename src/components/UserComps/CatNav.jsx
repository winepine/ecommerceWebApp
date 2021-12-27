import "./test.css";
import cartimg from "../../images/icons/cart.png";
import logo_sml from "../../images/logo_sml.jpg";
import logoutpic from "../../images/icons/logout.png";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { SearchContext } from "../customHooks/SearchContext";
const CatNav = props => {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();
  const searchSetter = useContext(SearchContext);
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("/api/category/categories");
      const categories = await response.json();
      setCats(categories.categoryList);
    };
    getCategories();
  }, []);
  return (
    <div>
      <div className="topbar">
        <img
          className="logo"
          onClick={props.setfunc}
          height="70px"
          src={logo_sml}
          alt=""
        />
        <div>
          <input
            className="adminField5"
            placeholder="Try Searching An Item"
            type="text"
            onChange={e => searchSetter(e.target.value)}
          />
        </div>
        <div>
          <button onClick={props.getCart}>
            <img src={cartimg} width="40px" alt="" />
          </button>
          <button onClick={logout} className="logout">
            <img src={logoutpic} width="40px" alt="" />
          </button>
        </div>
      </div>
      <div className="flexbox-container">
        {cats.map(c => {
          return (
            <div key={c._id} className="flexbox-item">
              <button>{c.name}</button>
              <div className="dropitems">
                {c.children &&
                  //⌄
                  c.children.map(child => (
                    <button key={child._id}>{child.name}</button>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CatNav;
