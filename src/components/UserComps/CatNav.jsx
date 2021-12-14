import "./test.css";
import cartimg from "../../images/icons/cart.png";
import logo_sml from "../../images/logo_sml.jpg";
import { useNavigate } from "react-router";
const CatNav = ({ setfunc }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  return (
    <div>
      <div className="topbar">
        <button>
          <img src={cartimg} width="40px" alt="" />
        </button>

        <img
          className="logo"
          onClick={setfunc}
          height="70px"
          src={logo_sml}
          alt=""
        />
        <button onClick={logout} className="logout">
          Logout
        </button>
      </div>
      <div
        // style={{ backgroundColor: "rgba(219,226,214,1)" }}
        className="flexbox-container"
      >
        <div className="flexbox-item">
          <button className="hoverhere">Electronics</button>
          <div className="dropitems">
            <button>Mobiles</button>
            <button>Camera</button>
            <button>Laptops</button>
            <button>Gaming</button>
            <button>Watches</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">Biryani</button>
          <div className="dropitems">
            <button>India</button>
            <button>Pakaistan</button>
            <button>Indonesia</button>
            <button>Africa</button>
            <button>Australia</button>
            <button>Russia</button>
            <button>Brazil</button>
            <button>Miami</button>
            <button>Norway</button>
            <button>Country</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">LifeStyle</button>
          <div className="dropitems">
            <button>Decor</button>
            <button>Bedding</button>
            <button>Furniture</button>
            <button>Kitched</button>
            <button>Dining</button>
            <button>Lighting</button>
            <button>Tools</button>
            <button>Stationary</button>
            <button>Media/Books</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">Groceries & Pets</button>
          <div className="dropitems">
            <button>Beverage</button>
            <button>Dairy</button>
            <button>Cat</button>
            <button>Dog</button>
            <button>Fish</button>
            <button>Laundry</button>
            <button>Food</button>
            <button>Snacks</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">Automotives</button>
          <div className="dropitems">
            <button>Bikes</button>
            <button>Cars</button>
            <button>Rikshaw</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatNav;
