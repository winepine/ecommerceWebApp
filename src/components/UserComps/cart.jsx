import { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../customHooks/UserContext";
import "./test.css";
const Cart = () => {
  const userData = useContext(UserContext);
  const [cart,setCart]=useState([]);
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const getCart =async ()=>{
      const response =  await fetch("/api/cart/viewcart", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({userId: userData._id}),
      });
      const cart = await response.json();
      setCart(cart.user[0].Items)
    }
    const getProds = async()=>{
      const response2 = await fetch("/api/product/products");
      const prods = await response2.json();
      setProducts(prods.user);
    }
    getCart();
    getProds();
  },[])
  
  return (
    <div className="cart">
      <h1>User Cart</h1>
      <hr style={{marginTop:"50px"}} />
      { cart.length>0?
      <div>
        <table style={{width:"100%"}}>
        <tr>
      <th>
          <h1>Item Name</h1>
        </th>
      <th>
          <h1>Quantity</h1>
      </th>
    <th>
          <h1>Price</h1>
    </th>
        </tr>
        
        {cart.map(item=><tr><th>

        <h2>{products.map(p=>{if(p._id===item.productId){return p.name}})}</h2>
        </th>
        <th>
          <h2>{item.productQuantity}</h2>

        </th>
        <th>
          <h2>{item.productPrice}</h2>
        </th>
          </tr>)}
          <tr>
          <th colspan="3">

          <hr  style={{marginTop:"50px"}} />
          </th>

          </tr>
        <tr >
          <th>
        <h1>Total :</h1>

          </th>
          <th>

          </th>
          <th>

        <h1>{cart[0].Total}</h1>
          </th>
        </tr>
        </table>
      </div>:
      <h1>Cart Empty</h1>
}
    </div>
  );
};
export default Cart;
