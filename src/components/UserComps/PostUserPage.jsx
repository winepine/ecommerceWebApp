import CatNav from "./CatNav";
import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import Cart from "./cart";
import i2 from "../../images/icons/i2.png";
import i3 from "../../images/icons/i3.png";
import i4 from "../../images/icons/i4.png";
import i5 from "../../images/icons/i5.png";
import i6 from "../../images/icons/i6.png";
import Carousel from "react-elastic-carousel";
import ProductPage from "./ProductPage";
import ProductDetails from "./ProductDetails";
import { UserContext } from "../customHooks/UserContext";
import { SearchContext } from "../customHooks/SearchContext";
import "./test.css";
import { unstable_createCssVarsProvider } from "@mui/system";
import { ProductsContext } from "../customHooks/ProductsContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostUserPage = () => {
  const CarouselRef = useRef(null);
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({});
  const [show, setShow] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [productinfo, setProductinfo] = useState("");
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const headerTag = useRef();
  useEffect(() => {
    headerTag.current.innerHTML = "Products";
    const getProducts = async () => {
      const response = await fetch("/api/product/products");
      const prods = await response.json();
      setProducts(prods.user);
    };
    getProducts();
  }, []);
  useEffect(() => {
    let token = localStorage.getItem("ecomtoken");
    if (!token) navigate("/");
    async function fetchData() {
      try {
        const result = await fetch(
          "/api/homepage/?authorization=bearer " + token
        );
        const user = await result.json();
        setUserdata(user);
        if (user.role === "admin") {
          navigate("/postSignin");
        }
      } catch (x) {
        localStorage.removeItem("ecomtoken");
        navigate("/");
      }
    }
    fetchData();
    document.title = "FYWEB Home";
    toast.success("Customer Logged In Succesfully!")
  }, []);
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  const getCartComp = () => {
    setShowCart(true);
  };
  const setterProp = useCallback(()=>{
    setShow(false);
  },[])
  return (
    <div>
      <ToastContainer 
        position="top-right"
        style={{
          width:"500px"
        }}
        />
      <SearchContext.Provider value={setSearchValue}>
        <CatNav
          getCart={() => getCartComp()}
          setfunc={() => {
            setShowCart(false);
            setShow(true);
          }}
          categoryChecker={setProducts}
          reference={headerTag}
        />
      </SearchContext.Provider>
      {showCart ? (
        <UserContext.Provider value={userdata}>
          <Cart />
        </UserContext.Provider>
      ) : show ? (
        <div className="removeXsc">
          <div className="carousel-container">
            {/* <Carousel
              enableAutoPlay
              autoPlaySpeed={3000}
              ref={CarouselRef}
              onNextEnd={(currentItem, pageIndex) => {
                if (pageIndex === 4) {
                  setTimeout(() => {
                    CarouselRef.current.goTo(0);
                  }, 2000);
                }
              }}
              itemsToShow={1}
            >
              <img src={i2} alt="" />
              <img src={i3} alt="" />
              <img src={i4} alt="" />
              <img src={i5} alt="" />
              <img src={i6} alt="" />
            </Carousel> */}
          </div>
          <div
            style={{
              backgroundColor: "rgba(219,226,214,0.5)",
              paddingTop: "1rem",
            }}
          >
            <h1
            ref={headerTag}
              style={{
                fontSize: "5rem",
                marginLeft: "40px",
                color: "rgba(81,110,108,1)",
                fontFamily: "poppos",
              }}
            >
              Products
            </h1>
            <SearchContext.Provider value={searchValue}>
              <ProductsContext.Provider value={products}>
              <ProductPage
                setfunc={setterProp}
                setProductValues={setProductinfo}
                />
                </ProductsContext.Provider>
            </SearchContext.Provider>
          </div>
        </div>
      ) : (
        <div>
          <UserContext.Provider value={userdata}>
            <ProductDetails prodata={productinfo} />
          </UserContext.Provider>
        </div>
      )}
    </div>
  );
};
export default PostUserPage;
