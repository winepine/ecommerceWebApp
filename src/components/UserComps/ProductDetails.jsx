import "./test.css";
import iphoneimg from "../../images/iphone.jpg";
import i1 from "../../images/icons/i1.png";
import i2 from "../../images/icons/i2.png";
import i3 from "../../images/icons/i3.png";
import { useState, useEffect } from "react";
const ProductDetails = props => {
  const [img, setimg] = useState("iphone.jpg");
  useEffect(() => {
    console.log(props.prodata.image);
    if (props.prodata.image.length > 0) {
      setimg(props.prodata.image[0].img);
    }
  }, []);
  return (
    <div className="productdesc">
      <div className="floatycontainer">
        <div className="float-child1">
          <img
            className="bigimg"
            src={"http://localhost:4000/" + img}
            width="400px"
            alt=""
          />
          <div className="extras">
            <button>
              <img src={`http://localhost:4000/cart.png`} alt="" />
            </button>
            <button>
              <img src={i2} alt="" />
            </button>
            <button>
              <img src={i3} alt="" />
            </button>
          </div>
        </div>
        <div className="float-child2">
          <h2>{props.prodata.name}</h2>
          <h6>{props.prodata.description}</h6>
          <h2>Rs. {props.prodata.price}</h2>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
