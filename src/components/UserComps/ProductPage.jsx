import { useEffect, useState } from "react";
import Product from "../SmallComponents/Product";
import "../../styles/signin.css"
const ProductPage = props => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/product/products");
      const prods = await response.json();
      setProducts(prods.user);
    };
    getProducts();
  }, []);
  return (
    <div className="productList">
      {products.map(p => (
        <Product
          setfunc={props.setfunc}
          setName={props.setProductValues}
          prodata={p}
        />
      ))}
      {/* <div className="productList">
        {/* {products.map(p => (
        <Product setfunc={props.setfunc} setName={props.setProductValues} />
      ))} }
      </div> */}
    </div>
  );
};
export default ProductPage;
