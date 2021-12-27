import { useContext, useEffect, useState } from "react";
import Product from "../SmallComponents/Product";
import "../../styles/signin.css";
import { SearchContext } from "../customHooks/SearchContext";
const ProductPage = props => {
  const [products, setProducts] = useState([]);
  const searchVal = useContext(SearchContext);
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
      {products.map(
        p =>
          p.name.toLowerCase().includes(searchVal) && (
            <Product
              setfunc={props.setfunc}
              setName={props.setProductValues}
              prodata={p}
            />
          )
      )}
      {/* <div className="productList">
        {/* {products.map(p => (
        <Product setfunc={props.setfunc} setName={props.setProductValues} />
      ))} }
      </div> */}
    </div>
  );
};
export default ProductPage;
