import { useState } from "react";
import iphone from "../../images/iphone.jpg";
import "../../styles/signin.css";
const Product = () => {
  const [styles, setStyles] = useState({
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "30px",
    backgroundColor: "white",
    maxWidth: "220px",
    borderRadius: "10%",
  });
  return (
    <div className="product" style={styles}>
      <img src={iphone} style={{ borderRadius: "10px" }} width="150px" alt="" />
      <h2>iPhone 13 Pro</h2>
      <p>Rs.74,000</p>
      <button>BUY</button>
    </div>
  );
};
export default Product;
