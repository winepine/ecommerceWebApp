import "./test.css";
import logo_sml from "../../images/logo_sml.jpg";
import i1 from "../../images/icons/i1.png";
import i2 from "../../images/icons/i2.png";
import i3 from "../../images/icons/i3.png";
import i4 from "../../images/icons/i4.png";
import i5 from "../../images/icons/i5.png";
import i6 from "../../images/icons/i6.png";
import Carousel from "react-elastic-carousel";
import Item from "./itemStyle";
import { useRef } from "react";
const CatNav = () => {
  const CarouselRef = useRef(null);
  return (
    <div>
      <div className="topbar">
        <img height="70px" src={logo_sml} alt="" />
      </div>
      <div
        style={{ backgroundColor: "rgba(219,226,214,1)" }}
        className="flexbox-container"
      >
        <div className="flexbox-item">
          <button className="hoverhere">Electronics</button>
          <div className="dropitems">
            <button>Mobiles</button>
            <button>Camera</button>
            <button>Laptops</button>
            <button>Gaming</button>
            <button>Watches</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">Biryani</button>
          <div className="dropitems">
            <button onClick={() => console.log("Clicked")}>India</button>
            <button>Pakaistan</button>
            <button>Indonesia</button>
            <button>Africa</button>
            <button>Australia</button>
            <button>Russia</button>
            <button>Brazil</button>
            <button>Miami</button>
            <button>Norway</button>
            <button>Country</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">LifeStyle</button>
          <div className="dropitems">
            <button>Decor</button>
            <button>Bedding</button>
            <button>Furniture</button>
            <button>Kitched</button>
            <button>Dining</button>
            <button>Lighting</button>
            <button>Tools</button>
            <button>Stationary</button>
            <button>Media/Books</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">Groceries & Pets</button>
          <div className="dropitems">
            <button>Beverage</button>
            <button>Dairy</button>
            <button>Cat</button>
            <button>Dog</button>
            <button>Fish</button>
            <button>Laundry</button>
            <button>Food</button>
            <button>Snacks</button>
          </div>
        </div>
        <div className="flexbox-item">
          <button className="hoverhere">Automotives</button>
          <div className="dropitems">
            <button>Bikes</button>
            <button>Cars</button>
            <button>Rikshaw</button>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel
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
        </Carousel>
      </div>
    </div>
  );
};
export default CatNav;
