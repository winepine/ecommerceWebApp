import { useEffect, useState } from "react";
import React from "react";
import iphone from "../../images/iphone.jpg";
import "../../styles/signin.css";
const Product = React.memo(props => {
  const [styles, setStyles] = useState({
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "30px",
    backgroundColor: "rgba(255,255,255,0.4)",
    maxWidth: "220px",
    borderRadius: "10%",
  });
  const [img, setimg] = useState("iphone.jpg");
  useEffect(() => {
    if (props.prodata.image.length > 0) {
      setimg(props.prodata.image[0].img);
    }
  }, []);
  useEffect(()=>{
    console.log("RENDERING PRODUCT...");
  })
  return (
    <div className="product" style={styles}>
      <img
        src={"http://localhost:4000/" + img}
        style={{
          borderRadius: "10px",
        }}
        className="thumbnail"
        alt=""
      />
      <h2 style={{ fontFamily: "poppop", color: "rgba(81, 110, 108, 1)" }}>
        {props.prodata.name}
      </h2>
      <p
        style={{
          color: "rgba(81, 110, 108, 1)",
        }}
      >
        ${props.prodata.price}
      </p>
      <button
        onClick={() => {
          props.setfunc(false);
          props.setName(props.prodata);
        }}
      >
        View Details
      </button>
    </div>
  );
});
export default Product;
