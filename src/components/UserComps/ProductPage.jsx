import { useContext, useEffect, useState } from "react";
import React from "react";
import Product from "../SmallComponents/Product";
import "../../styles/signin.css";
import { SearchContext } from "../customHooks/SearchContext";
import { ProductsContext } from "../customHooks/ProductsContext";
const ProductPage = React.memo(props => {
  const searchVal = useContext(SearchContext);
  const products = useContext(ProductsContext);
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
    </div>
  );
});
export default ProductPage;
