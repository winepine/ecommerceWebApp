import { useEffect, useState } from "react";
import iphone from "../../images/iphone.jpg";
import "../../styles/signin.css";
const Product = props => {
  const [styles, setStyles] = useState({
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "30px",
    backgroundColor: "white",
    maxWidth: "220px",
    borderRadius: "10%",
  });
  const [img, setimg] = useState("iphone.jpg");
  useEffect(() => {
    console.log(props.prodata.image);
    if (props.prodata.image.length > 0) {
      setimg(props.prodata.image[0].img);
    }
  }, []);
  return (
    <div className="product" style={styles}>
      <img
        src={"http://localhost:4000/" + img}
        style={{ borderRadius: "10px" }}
        className="thumbnail"
        alt=""
      />
      <h2>{props.prodata.name}</h2>
      <p>{props.prodata.price}</p>
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
};
export default Product;
