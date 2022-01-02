import "./test.css";
import iphoneimg from "../../images/iphone.jpg";
import i1 from "../../images/icons/i1.png";
import i2 from "../../images/icons/i2.png";
import i3 from "../../images/icons/i3.png";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../customHooks/UserContext";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = props => {
  const cartRef = useRef(null);
  const [img, setimg] = useState("iphone.jpg");
  const userData = useContext(UserContext);
  useEffect(() => {
    if (props.prodata.image.length > 0) {
      setimg(props.prodata.image[0].img);
    }
  }, []);
  const insertProduct = async () => {
    const cartupdate = {
      productId: props.prodata._id,
      productQuantity: 1,
      productPrice: props.prodata.price,
      userId: userData._id,
    };
    console.log(cartupdate);
    let token = localStorage.getItem("ecomtoken");
    const endpoint = "/api/cart/addItem?authorization=bearer " + token;
    try {
      const resposne = await fetch(endpoint, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(cartupdate),
      });
      const res = await resposne.json();
      toast.info("Product Added To Cart!")
    } catch (x) {
      toast.error("Something Went Wrong While Updating the Cart.")
    }
  };
  return (
    <div className="productdesc">
      <ToastContainer 
      position="top-right"
      style={{
        width:"500px"
      }}
      />
      <div className="floatycontainer">
        <div className="float-child1">
          <img
            className="bigimg"
            src={"http://localhost:4000/" + img}
            width="400px"
            alt=""
          />
          {/* <div className="extras">
            <button>
              <img src={`http://localhost:4000/cart.png`} alt="" />
            </button>
            <button>
              <img src={i2} alt="" />
            </button>
            <button>
              <img src={i3} alt="" />
            </button>
          </div> */}
        </div>
        <div className="float-child2">
          <h2>{props.prodata.name}</h2>
          <h6>Brand: {props.prodata.brand}</h6>
          <h6>{props.prodata.description}</h6>
          <h2>${props.prodata.price}</h2>
          <h6 ref={cartRef}></h6>
          <button onClick={insertProduct}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
